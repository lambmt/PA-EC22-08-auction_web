package hcmute.ec.pa_ec_22_08.auction_web.enummuration;

public enum Role {
    ADMIN("ADMIN"),
    CUSTOMER("CUSTOMER");

    private final String value;

    Role(String value) {
        this.value = value;
    }
}