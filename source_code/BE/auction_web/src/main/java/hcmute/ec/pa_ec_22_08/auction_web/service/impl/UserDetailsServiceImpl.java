package hcmute.ec.pa_ec_22_08.auction_web.service.impl;

import hcmute.ec.pa_ec_22_08.auction_web.constant.MessageConstant;
import hcmute.ec.pa_ec_22_08.auction_web.entity.User;
import hcmute.ec.pa_ec_22_08.auction_web.enumuration.UserRole;
import hcmute.ec.pa_ec_22_08.auction_web.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserRepository userRepository;

    public UserDetailsServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        User user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() -> new UsernameNotFoundException(MessageConstant.USER_NOT_FOUND + usernameOrEmail));
        return new org.springframework.security.core.userdetails.User(
                user.getEmail(),
                user.getPassword().getPassword(),
                this.mapRolesToAuthorities(user.getRoles())
        );
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Set<Role> roles) {
        return roles
                .stream()
                .map(role -> new SimpleGrantedAuthority(UserRole.fromValue(role.getRoleName())))
                .collect(Collectors.toList());
    }
}