package Elearning.vinhit.service.serviceImplement;

import Elearning.vinhit.dao.AccountDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImp implements UserDetailsService {
    @Autowired
    AccountDao accountDao;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return  accountDao.findAccountByUsername(username);
    }
}
