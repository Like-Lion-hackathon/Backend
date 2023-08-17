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
    @GetMapping("/ListData")
  //  @ResponseBody  ("key[]")
    public List<Map<String, Object>> getPostDetails(@RequestParam List<Integer> subcategoryIds) {
        return postRepository.getPostDetails(subcategoryIds);
    }
    
   @GetMapping("/postData")
    //  @ResponseBody  ("key[]")
    public List<Map<String, Object>> getSub(@RequestParam("0") Integer s1,@RequestParam("1") Integer s2,@RequestParam("2") Integer s3,@RequestParam("3") Integer s4 ) {
        return postRepository.getSub(s1, s2, s3, s4);
    }
    //test
    @RequestMapping(value="insert", method = RequestMethod.POST)
    public @ResponseBody List<Map<String,Object>> insert(@RequestBody List<Map<String,Object>> subcategoryIds) {
        return postRepository.getTest(subcategoryIds);
    }
}

