package Elearning.vinhit.dao;

import Elearning.vinhit.model.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountDao extends JpaRepository<Account,Long> {
    Account findAccountByUsername(String username);
}
