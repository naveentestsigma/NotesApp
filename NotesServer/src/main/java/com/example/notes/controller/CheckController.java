package com.example.notes.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class CheckController {
    @GetMapping("/")
    String welcome()
    {
        return "<h1>Welcome </h1>";
    }

}
