package Elearning.vinhit.exception;

import Elearning.vinhit.dto.ApiResponse;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<String> getAccount (UsernameNotFoundException e){
        return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);
    }

    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<String> badCredential (BadCredentialsException e){
        return new ResponseEntity<>(e.getMessage(), HttpStatus.OK);
    }
    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ApiResponse<?>> badCredential (RuntimeException e){
        ApiResponse<?> apiResponse= ApiResponse
                .builder()
                .code(404)
                .message(e.getMessage())
                .build();
        return ResponseEntity.ok(apiResponse);
    }

}
