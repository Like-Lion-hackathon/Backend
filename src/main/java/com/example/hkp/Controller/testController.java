package com.example.hkp.Controller;

import com.example.hkp.Service.RGBExtractor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class testController {

    @Autowired
    private RGBExtractor  rgbExtractor;

    //test
    @PostMapping("/RGB")
    public String getRGB(){
        rgbExtractor.RGBExtraction();
        return "RGB값";
    }

}
