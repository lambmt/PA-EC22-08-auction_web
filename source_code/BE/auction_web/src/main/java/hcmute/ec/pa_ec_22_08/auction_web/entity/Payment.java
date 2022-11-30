package hcmute.ec.pa_ec_22_08.auction_web.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "payment")
@Getter
@Setter
@ToString
public class Payment extends AbstractEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private User user;
    private String walletId;
    private BigDecimal credit;
    private boolean isActive;
}