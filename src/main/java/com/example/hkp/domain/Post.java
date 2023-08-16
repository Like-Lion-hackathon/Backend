package com.example.hkp.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "post")
//게시물 정보 entity
public class Post {

    @Id
    private Long post_id;

    @Column(name = "likenum")
     private String likenum;

    private String url;
    private String item;
    private String company;
    private String color;

    //카테고리랑 매핑
   // @ManyToOne
   // private Category category;

}