package main;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class loginController {

    @GetMapping("/login")
    public String showNumberInputPage() {
        return "login"; // login.html 연결
    }

    @PostMapping("/login")
    public String processNumber(@RequestParam("id") String id, Model model) {
        if ("1234512345".equals(id) ){ // 예시 조건: 번호가 "1234512345"일 때만 다음 페이지로 이동
            return "main"; // main.html 연결
        } else {
            model.addAttribute("errorMessage", "존재하지 않은 번호입니다.");
            return "login"; // 에러 메시지와 함께 다시 입력 페이지로 돌아감
        }
    }
}
