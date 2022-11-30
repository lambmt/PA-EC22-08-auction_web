package hcmute.ec.pa_ec_22_08.auction_web.entity;

import hcmute.ec.pa_ec_22_08.auction_web.enummuration.OrderStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "order")
@Getter
@Setter
@ToString
public class Order extends AbstractEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Product product;
    private String sender;
    private String receiver;
    private BigDecimal totalBill;
    private String address;
    private OrderStatus orderStatus;
    private boolean delFrag;
}