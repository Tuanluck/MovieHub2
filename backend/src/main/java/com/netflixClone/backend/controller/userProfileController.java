package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.userProfile;
import com.netflixClone.backend.service.userProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class userProfileController {

    @Autowired
    private userProfileService userProfileService;

    @PostMapping("api/profile/add")
    public ResponseEntity<userProfile> addProfile(@RequestBody userProfile newProfile){
        return new ResponseEntity<userProfile>(userProfileService.addProfile(newProfile),HttpStatus.CREATED);
    }
    @PutMapping("api/profile/update/{email}/{profileName}")
    public ResponseEntity<userProfile> updateProfile(@PathVariable("email")String email,@PathVariable("profileName")String profileName,@RequestBody userProfile existingProfile){
        return new ResponseEntity<userProfile>(userProfileService.updateProfile(existingProfile,email,profileName),HttpStatus.OK);
    }
    @DeleteMapping("api/profile/delete/{email}/{profileName}")
    public ResponseEntity<String> deleteProfile(@PathVariable("email") String email,@PathVariable("profileName") String profileName){
        userProfileService.deleteProfile(email, profileName);
        return new ResponseEntity<String>("profile delete successful!",HttpStatus.OK);
    }
    @GetMapping("api/profile/validate/{email}/{profileName}")
    public ResponseEntity<Boolean> validateProfileName(@PathVariable("email") String email,@PathVariable("profileName") String profileName){
        boolean validity= userProfileService.validateProfileName(email, profileName);
        return ResponseEntity.ok(validity);
    }
    @GetMapping("api/profile/validate/{gameHandle}")
    public ResponseEntity<Boolean> validateGameHandle(@PathVariable("gameHandle") String gameHandle){
        boolean validity= userProfileService.validateGameHandle(gameHandle);
        return ResponseEntity.ok(validity);
    }
    @GetMapping("api/profiles/{email}")
    public List<userProfile> getAllProfiles(@PathVariable("email") String email){
        return userProfileService.getAllProfiles(email);
    }
}
