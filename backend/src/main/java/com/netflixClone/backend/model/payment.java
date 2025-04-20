package com.netflixClone.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "transactions")
public class payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long referenceNo;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "cardNumber")
    private String cardNumber;
    @Column(name = "paymentAmount",nullable = false)
    private double paymentAmount;
    @Column(name = "paymentDateTime")
    private LocalDateTime paymentDateTime;
}
