package Elearning.vinhit.security;
import Elearning.vinhit.service.serviceImplement.UserDetailServiceImp;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.security.SignatureException;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {
    @Autowired
    private JwtTokenService jwtTokenService;
    @Autowired
    UserDetailServiceImp userDetailServiceImp;
    private static final String TOKEN_PREFIX = "Bearer ";
    private static final String HEADER_STRING = "Authorization";
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {
        if (request.getRequestURI().equals("/itcanban/login")) {
            filterChain.doFilter(request, response); // Bỏ qua filter
            return;
        }
        String header = request.getHeader(HEADER_STRING);
        String username=null;

            if(header!=null && header.startsWith(TOKEN_PREFIX)){
                String authToken=header.replace(TOKEN_PREFIX,"");
                username=jwtTokenService.extractUserNameFromToken(authToken);
            }else{
                throw new RuntimeException("invalid");

            }



        if(StringUtils.hasText(username)){
            UserDetails userDetails= userDetailServiceImp.loadUserByUsername(username);
            UsernamePasswordAuthenticationToken authentication= new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }
        filterChain.doFilter(request,response);
    }
}
