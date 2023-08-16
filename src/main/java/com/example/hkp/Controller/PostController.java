package com.example.hkp.Controller;

import com.example.hkp.Repository.PostRepository;
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
  //  @ResponseBody  ("key[]")
    public List<Map<String, Object>> getPostDetails(@RequestParam List<Integer> subcategoryIds) {
        return postRepository.getPostDetails(subcategoryIds);
    }

    //test
    @RequestMapping(value="insert", method = RequestMethod.POST)
    public @ResponseBody List<Map<String,Object>> insert(@RequestBody List<Map<String,Object>> subcategoryIds) {
        return postRepository.getTest(subcategoryIds);
    }
}

