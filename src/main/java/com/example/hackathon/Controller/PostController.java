package com.example.hackathon.Controller;

import com.example.hackathon.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
public class PostController {

    private final PostRepository postRepository;

    //카테고리별 게시물 url조회
    @GetMapping("/PostUrl")
    public List<String> PostUrl(@RequestParam List<Integer> subcategoryIds) {
        return postRepository.getUrl(subcategoryIds);
    }

    //게시물 정보 전부 조회
    @GetMapping("/postData")
    @ResponseBody
    public List<Map<String, Object>> getPostDetails(@RequestParam List<Integer> subcategoryIds) {
        return postRepository.getPostDetails(subcategoryIds);
    }

}

