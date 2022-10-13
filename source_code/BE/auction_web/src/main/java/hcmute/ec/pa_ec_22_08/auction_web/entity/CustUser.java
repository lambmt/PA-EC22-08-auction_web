package hcmute.ec.pa_ec_22_08.auction_web.entity;


import hcmute.ec.pa_ec_22_08.auction_web.enumuration.UserStatus;
import hcmute.ec.pa_ec_22_08.auction_web.enumuration.UserTitle;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
@Table(name = "cust_user")
@Getter
@Setter
@ToString
public class CustUser extends AbstractAuditingEntity{
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_title")
    @Enumerated(EnumType.STRING)
    private UserTitle userTitle;

    @NotNull
    @Size(max = 64)
    @Column(name = "first_name", length = 64, nullable = false)
    private String firstName;

    @NotNull
    @Size(max = 64)
    @Column(name = "last_name", length = 64, nullable = false)
    private String lastName;

    @Size(max = 50)
    @Column(name = "phone_no", length = 50)
    private String phoneNo;

    @NotNull
    @Size(max = 100)
    @Column(name = "email", length = 100, nullable = false)
    private String email;

    @NotNull
    @Size(max = 100)
    @Column(name = "user_id", length = 100, nullable = false)
    private String userId;

    @Column(name = "status")
    private UserStatus userStatus;
}
