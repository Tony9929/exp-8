
package com.example.jwt.controller;

import com.example.jwt.config.JwtUtil;
import com.example.jwt.model.*;
import com.example.jwt.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthController {

    private final UserRepository repo;
    private final JwtUtil jwtUtil;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public AuthController(UserRepository repo, JwtUtil jwtUtil) {
        this.repo = repo;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        user.setPassword(encoder.encode(user.getPassword()));
        repo.save(user);
        return "Registered";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User dbUser = repo.findByUsername(user.getUsername()).orElseThrow();
        if (encoder.matches(user.getPassword(), dbUser.getPassword())) {
            return jwtUtil.generateToken(user.getUsername());
        }
        throw new RuntimeException("Invalid");
    }
}
