package Elearning.vinhit.controller;

import Elearning.vinhit.service.serviceImplement.AccountServiceImp;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
@CrossOrigin("*")
@Controller
@Tag(name = "UserController", description = "User Login APIs")
@RequestMapping("/itcanban")
public class LoginController {
    @Autowired
    AccountServiceImp accountServiceImp;
    @GetMapping("/login")
    @Operation(summary = "Login by user", description = "Login from user to website")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "401", description = "User name or password invalid"),
            @ApiResponse(responseCode = "200", description = "Successfully login"),
            @ApiResponse(responseCode = "403", description = "Not valid author. Try access system by correct authorities"),

    })
    public ResponseEntity<Elearning.vinhit.dto.ApiResponse<?>> login(@RequestParam String username, @RequestParam String password) throws BadCredentialsException, UsernameNotFoundException {
        Elearning.vinhit.dto.ApiResponse<?> apiResponse = Elearning.vinhit.dto.ApiResponse.builder()
                .code(200)
                .message("Successfully login")
                .result(accountServiceImp.login(username, password)).build();
        return ResponseEntity.ok(apiResponse) ;
    }
}
