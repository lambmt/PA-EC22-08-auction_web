package hcmute.ec.pa_ec_22_08.auction_web.service;

import hcmute.ec.pa_ec_22_08.auction_web.dto.req.AuthenticationReqDTO;

public interface AuthenticationService {
    void login(AuthenticationReqDTO authenticationReqDTO);
}
