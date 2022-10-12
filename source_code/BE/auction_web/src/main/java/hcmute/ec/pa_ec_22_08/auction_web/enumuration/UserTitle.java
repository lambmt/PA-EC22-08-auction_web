package hcmute.ec.pa_ec_22_08.auction_web.enumuration;

public enum UserTitle {
    MR("Mr."),
    MS("Miss."),
    MRS("Mrs.");

    private final String value;
    private UserTitle(String value) {
        this.value = value;
    }
    public String getValue() {
        return this.value;
    }

}
