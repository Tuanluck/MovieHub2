package com.netflixClone.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "videoMetaData")
public class videoMetaData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long videoID;
    @Column(name = "videoTitle",nullable = false)
    private String videoTitle;
    @Column(name = "videoThumbnail",nullable = false)
    private String Thumbnail;
    @Column(name = "suggestionCategory",nullable = false)
    private String suggestionCategory;
    @Column(name = "videoCategory",nullable = false)
    private String videoCategory;
    @Column(name = "videoRating",nullable = false)
    private double videoRating;
    @Column(name = "releaseYear",nullable = false)
    private String releaseYear;

}
