package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.userAccount;
import com.netflixClone.backend.service.userAccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
public class userAccountController {
    @Autowired
    private userAccountService userAccountService;

    @PostMapping("api/register")
    public ResponseEntity<userAccount> userRegister(@RequestBody userAccount newUser){
        return new ResponseEntity<userAccount>(userAccountService.userRegister(newUser), HttpStatus.CREATED);
    }
    @GetMapping("api/verifyEmail/{email}")
    public boolean emailExists(@PathVariable String email) {
        return userAccountService.emailExists(email);
    }
    @GetMapping("api/authenticator/{email}/{password}")
    public ResponseEntity<Boolean> userAuthentication(@PathVariable("email") String email, @PathVariable("password") String password){
        boolean validity= userAccountService.userAuthentication(email,password);
        return ResponseEntity.ok(validity);
    }
}
