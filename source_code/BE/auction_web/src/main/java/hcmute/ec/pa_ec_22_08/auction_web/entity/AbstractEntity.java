package hcmute.ec.pa_ec_22_08.auction_web.entity;

import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Getter
@Setter
public class AbstractEntity {

    @CreatedBy
    private String createdBy;

    @CreatedDate
    @NonNull
    private LocalDateTime createdDate;

    @LastModifiedBy
    private String updatedBy;

    @LastModifiedDate
    @NonNull
    private LocalDateTime updatedDate;
}
