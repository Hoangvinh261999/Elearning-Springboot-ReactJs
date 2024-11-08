package Elearning.vinhit.model;

import Elearning.vinhit.enums.Role;
import Elearning.vinhit.enums.Status;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Table(name = "Account")
@Data
public class Account implements UserDetails {
    @Id
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "address",columnDefinition = "text")
    private String address;

    @Column(name = "full_name",columnDefinition = "text")
    private String fullName;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private Status status;

    @Column(name = "create_at")
    private LocalDate createAt;

    @Column(name = "update_at")
    private LocalDate updateAt;

    @Column(name = "delete_at")
    private LocalDate deleteAt;

    @OneToMany(mappedBy = "account",fetch = FetchType.EAGER)
    private List<RoleMapping> roleMappings;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roleMappings.stream().map(roleMapping -> new SimpleGrantedAuthority(roleMapping.getRole().getRoleName().toString()))
                .collect(Collectors.toList());
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
