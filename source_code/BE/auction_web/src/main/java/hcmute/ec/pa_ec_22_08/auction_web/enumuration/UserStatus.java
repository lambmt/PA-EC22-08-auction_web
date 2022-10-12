package hcmute.ec.pa_ec_22_08.auction_web.enumuration;

import com.fasterxml.jackson.annotation.JsonValue;

import java.util.stream.Stream;

public enum UserStatus {
    ACTIVE(0),
    INACTIVE(1),
    NEW(2),
    WAITING_FOR_APPROVAL(3),
    DELETED(4);

    private final int value;

    private UserStatus(int value) {this.value = value;}

    @JsonValue
    public int getValue(){
        return this.value;
    }

    public static UserStatus fromValue(int value) {
        return Stream.of(UserStatus.values())
                .filter(item -> item.getValue() == value)
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid UserStatus value!"));
    }

    @Override
    public String toString(){
        return value + "";
    }
}
