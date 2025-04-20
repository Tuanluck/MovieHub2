package com.netflixClone.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "userProfiles")
public class userProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "email",nullable = false)
    private String email;
    @Column(name = "profileName")
    private String profileName;
    @Column(name = "profilePicture")
    private String profilePicture;
    @Column(name = "language")
    private String language;
    @Column(name = "maturity")
    private String maturity;
    @Column(name = "gameHandle")
    private String gameHandle;

    @PrePersist
    protected void onCreate() {
        if (this.profileName == null) {
            this.profileName = "My Profile";
        }
        if (this.profilePicture == null) {
            this.profilePicture = "i1";
        }
        if (this.language == null) {
            this.language = "English";
        }
        if (this.maturity == null) {
            this.maturity = "General Audience";
        }
    }
}
