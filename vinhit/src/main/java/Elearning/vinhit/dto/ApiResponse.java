package Elearning.vinhit.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import java.time.Instant;
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    @JsonInclude(JsonInclude.Include.NON_NULL)
    public class ApiResponse <T> {
        private int code;
        private String message;
        private long timestamp= Instant.now().getEpochSecond();
        private String privacy ="vinhit.com.vn";
        private T result;

    }


