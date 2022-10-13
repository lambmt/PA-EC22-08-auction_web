package hcmute.ec.pa_ec_22_08.auction_web.service.impl;

import hcmute.ec.pa_ec_22_08.auction_web.dto.req.AuthenticationReqDTO;
import hcmute.ec.pa_ec_22_08.auction_web.service.AuthenticationService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManagerBuilder authenticationManagerBuilder;

    public AuthenticationServiceImpl(AuthenticationManagerBuilder authenticationManagerBuilder) {
        this.authenticationManagerBuilder = authenticationManagerBuilder;
    }

    @Override
    public void login(AuthenticationReqDTO authenticationReqDTO) {
        authenticationManagerBuilder
                .getObject()
                .authenticate(
                        new UsernamePasswordAuthenticationToken(
                                authenticationReqDTO.getEmail(),
                                authenticationReqDTO.getPassword()
                        )
                );
    }
}
