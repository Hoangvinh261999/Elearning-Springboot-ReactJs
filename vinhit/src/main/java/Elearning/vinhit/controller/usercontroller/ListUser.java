package Elearning.vinhit.controller.usercontroller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@Tag(name = "UserController", description = "User Management APIs")
public class ListUser {
    @GetMapping("/users")
    @Operation(summary = "Get all users", description = "Fetches all users from the system")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the list of users"),
            @ApiResponse(responseCode = "404", description = "No users found")
    })
    public ResponseEntity<String> listUser(){
        return new ResponseEntity<>("oke check valid", HttpStatus.OK);
    }

    @PostMapping("/users/{id}")
    @Operation(summary = "Get user by ID", description = "Fetches a user by their ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Successfully retrieved the user"),
            @ApiResponse(responseCode = "404", description = "User not found")
    })
    public ResponseEntity<String> getUserById(@PathVariable String id) {
        return new ResponseEntity<>("User with ID " + id, HttpStatus.OK);
    }


}
