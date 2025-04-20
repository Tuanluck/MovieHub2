package com.netflixClone.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "cardInfo")
public class card {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "cardNumber",nullable = false)
    private String cardNumber;
    @Column(name = "cardHoldName",nullable = false)
    private String cardHoldName;
    @Column(name = "expDate",nullable = false)
    private String expDate;
    @Column(name = "cvv",nullable = false)
    private int cvv;
}
