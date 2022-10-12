package hcmute.ec.pa_ec_22_08.auction_web.controller;

import hcmute.ec.pa_ec_22_08.auction_web.configuration.interceptor.JwtContextHolder;
import hcmute.ec.pa_ec_22_08.auction_web.dto.req.AuthenticationReqDTO;
import hcmute.ec.pa_ec_22_08.auction_web.service.AuthenticationService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class AuthenticationController {
    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }
    @PostMapping("/customer-login")
    public ResponseEntity customerLogin(@RequestBody AuthenticationReqDTO authenticationReqDTO) {
        authenticationService.login(authenticationReqDTO);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "Bearer " + JwtContextHolder.getCurrentJwt());
        httpHeaders.add("Set-Cookie", String.format("%s=%s; Path=/; HttpOnly; Secure; SameSite=None"));
        return null;
    }

    @PostMapping("/logout")
    public ResponseEntity logout() {
        return null;
    }



}
