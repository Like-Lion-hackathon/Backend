package com.example.hackathon.Controller;


import com.example.hackathon.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryRepository categoryRepo;

    //카테고리 조회
    @GetMapping(path = "/CategoryTest")
    public List<String>getAllCategorys(){
        return categoryRepo.getAllCategorys();
    }
}

// dd