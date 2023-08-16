package com.example.hkp.Service;

import org.springframework.stereotype.Service;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;

@Service
//이미지 색상 추출 클래스
public class RGBExtractor {

        public void RGBExtraction() {
            try {
                // 이미지 파일 경로 설정 (상대 경로)

                String imagePath = "src/main/resources/test.png";

                // 이미지 파일을 BufferedImage로 읽어오기
                BufferedImage image = ImageIO.read(new File(imagePath));

                // 이미지의 너비와 높이 추출
                int width = image.getWidth();
                int height = image.getHeight();

                // 특정 좌표의 RGB값 추출 (x, y 좌표)
                int x = 100; // x 좌표 설정
                int y = 200; // y 좌표 설정

                // 지정한 좌표의 RGB값 추출
                if (x >= 0 && x < width && y >= 0 && y < height) {
                    int pixel = image.getRGB(x, y);

                    // RGB값 분리
                    int red = (pixel >> 16) & 0xFF;
                    int green = (pixel >> 8) & 0xFF;
                    int blue = pixel & 0xFF;

                    // 결과 출력
                    System.out.println("RGB at (" + x + ", " + y + "):");
                    System.out.println("Red: " + red);
                    System.out.println("Green: " + green);
                    System.out.println("Blue: " + blue);
                } else {
                    System.out.println("좌표 (" + x + ", " + y + ")가 이미지 범위를 벗어납니다.");
                }

            } catch (IOException e) {
                e.printStackTrace();
            }
        }
}
