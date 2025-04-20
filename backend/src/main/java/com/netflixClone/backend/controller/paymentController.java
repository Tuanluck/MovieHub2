package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.card;
import com.netflixClone.backend.model.paymentWrapper;
import com.netflixClone.backend.service.paymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class paymentController {

    @Autowired
    private paymentService paymentService;

    @PostMapping("api/payment/card")
    public ResponseEntity<Boolean> cardValidation(@RequestBody card cardDetails){
        boolean validity= paymentService.cardValidation(cardDetails);
        return ResponseEntity.ok(validity);
    }
    @PostMapping("api/payment/proceed")
    public  ResponseEntity<String> proceedPayment(@RequestBody paymentWrapper payment){
        if(paymentService.proceedPayment(payment))
            return ResponseEntity.status(HttpStatus.CREATED).body("Payment processed successfully.");
        else
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Payment processing failed.");
    }
}
