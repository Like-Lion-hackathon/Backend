package com.example.hkp.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class loginController {

    @PostMapping("/login")
    public ResponseEntity processNumber(@RequestParam("id") String id, Model model) {
        if ("1234512345".equals(id) ){ // 예시 조건: 번호가 "1234512345"일때 로그인 성공 응답
            return ResponseEntity.ok(200);
        } else {
            return  ResponseEntity.badRequest().body("로그인 실패");
        }
    }
}