package com.example.hkp.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class filterController {

    //해시태그 색 아이템 (좋아요수?) 영상은 빼고
    @GetMapping("/filter")
    public String getFilter(){

        return "test";
    }

}
