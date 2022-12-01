package hcmute.ec.pa_ec_22_08.auction_web.controller;

import hcmute.ec.pa_ec_22_08.auction_web.entity.Product;
import hcmute.ec.pa_ec_22_08.auction_web.service.ProductService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auction/product")
@Slf4j
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @PostMapping("/save")
    public ResponseEntity<Product> saveProduct(Product product) {
        log.info("REST ful api to create product");
        return ResponseEntity.ok(productService.saveProduct(product));
    }

    @GetMapping("/list-product")
    public ResponseEntity<List<Product>> getListProduct() {
        log.info("REST ful api to get list product");
        return ResponseEntity.ok(productService.getListProduct());
    }
}
