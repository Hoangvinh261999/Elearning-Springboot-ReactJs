package Elearning.vinhit.service;

import Elearning.vinhit.model.Account;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface AccountService {
    public String login(String username,String password);
}
