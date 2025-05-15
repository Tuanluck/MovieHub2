package com.netflixClone.backend.controller;

import com.netflixClone.backend.model.videoMetaData;
import com.netflixClone.backend.service.videoSuggestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class videoSuggestionController {

    @Autowired
    private videoSuggestionService videoSuggestionService;

    @GetMapping("api/videoSuggestions/{suggestionCategory}")
    public List<videoMetaData> getSuggestions(@PathVariable("suggestionCategory") String suggestionCategory){
        return videoSuggestionService.getSuggestions(suggestionCategory);
    }

    @GetMapping("/api/videoSuggestions/search/{keyword}")
    public List<videoMetaData> searchVideos(@PathVariable String keyword) {
        return videoSuggestionService.searchByTitle(keyword);
    }
}
