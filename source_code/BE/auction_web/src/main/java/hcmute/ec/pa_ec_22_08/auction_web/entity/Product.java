package hcmute.ec.pa_ec_22_08.auction_web.entity;

import hcmute.ec.pa_ec_22_08.auction_web.enummuration.ProductStatus;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
@Getter
@Setter
@ToString
public class Product extends AbstractEntity{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String productName;
    private Category category;
    private BigDecimal price;
    private int quantity;
    private User user;
    private ProductStatus productStatus;
    private boolean delFrag;
}
