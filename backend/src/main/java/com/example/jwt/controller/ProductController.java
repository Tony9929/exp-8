
package com.example.jwt.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @GetMapping("/products")
    public List<String> getProducts() {
        return List.of("Laptop","Phone","Tablet");
    }

    @GetMapping("/profile")
    public String profile() {
        return "Protected Profile Data";
    }
}
