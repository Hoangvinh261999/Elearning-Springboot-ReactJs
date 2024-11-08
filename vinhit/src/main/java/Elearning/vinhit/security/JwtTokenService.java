package Elearning.vinhit.security;

import Elearning.vinhit.enums.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class JwtTokenService {
    private static final String key="d62c2dc7106c56c5ab1ea4247838ba28c718dbd0a1adee02ef937945bcbabfdf";
    private static final String secretKey = key;
    private static final long ACCESS_TOKEN_VALIDITY_SECONDS =6*60*6000;

    public String generateToken(String userName, Collection<?extends GrantedAuthority> authorities){
        List<String> roles = authorities.stream()
                .map(GrantedAuthority::getAuthority)
                .toList();
        return Jwts.builder().setSubject(userName)
                .claim("roles",roles)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ACCESS_TOKEN_VALIDITY_SECONDS))
                .setIssuer("https://www.devvinh.com")
                .signWith(getKeys(secretKey),SignatureAlgorithm.HS256)
                .compact();
    }


    public Key getKeys(String keys){
        byte[] keyBytes = Decoders.BASE64.decode(keys);
        return   Keys.hmacShaKeyFor(keyBytes);

    }

    public <T> T getClaims(String token, Function<Claims, T> resolver) {
        return resolver.apply(Jwts.parserBuilder()
                .setSigningKey(getKeys(secretKey))
                .build()
                .parseClaimsJws(token)
                .getBody());

    }
    public boolean isTokenExpired(String token){
        Date expiration = getClaims(token, Claims::getExpiration);
        return expiration.before(new Date());
    }
//    public boolean isTokenValid(String token) {
//        try {
//            Claims claims = Jwts.parserBuilder()
//                    .setSigningKey(getKeys(secretKey))
//                    .build()
//                    .parseClaimsJws(token)
//                    .getBody();
//
//            return !claims.getExpiration().before(new Date());
//        } catch (ExpiredJwtException e) {
//            // Token đã hết hạn
//            return false;
//        } catch (RuntimeException e) {
//            throw new RuntimeException("Invalid token!");
//        }}
    public String extractUserNameFromToken(String token){
        if(isTokenExpired(token)){
            return null;
        }
        return getClaims(token,Claims::getSubject);
    }

}
