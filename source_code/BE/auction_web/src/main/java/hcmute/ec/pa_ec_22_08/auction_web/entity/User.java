package hcmute.ec.pa_ec_22_08.auction_web.entity;

import hcmute.ec.pa_ec_22_08.auction_web.enummuration.Gender;
import hcmute.ec.pa_ec_22_08.auction_web.enummuration.Role;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "User")
@Getter
@Setter
@ToString
public class User extends AbstractEntity{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String userId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNo;
    private Gender gender;
    private String avatarUrl;
    private String address;
    private Date dayOfBirth;
    private Role role;
    private boolean isActive;
    private boolean delFrag;
}
