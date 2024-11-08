package Elearning.vinhit.service.serviceImplement;

import Elearning.vinhit.dao.AccountDao;

import Elearning.vinhit.model.Account;
import Elearning.vinhit.security.JwtTokenService;
import Elearning.vinhit.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

@Component
public class AccountServiceImp implements AccountService{
    @Autowired
    AccountDao accountDao;
    @Autowired
    UserDetailsService userDetailsService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    JwtTokenService jwtTokenService;
    @Override
    public String login(String username, String password) throws BadCredentialsException, UsernameNotFoundException {
        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDetails, password)
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        return jwtTokenService.generateToken(username, userDetails.getAuthorities());
    }





}
