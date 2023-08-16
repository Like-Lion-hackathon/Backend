package com.example.hkp.Repository;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class CategoryRepository {

    private final JdbcTemplate jdbcTemplate;

    //카테고리명(아이템, 회사, 좋아요수, 컬러 )
    public List<String> getAllCategorys(){
        List<String> categoryList = new ArrayList<>();
        categoryList.addAll(jdbcTemplate.queryForList("select name from category;",String.class));
        return categoryList;
    }

    //이미지 url 전부 조회
    public List<String> getAllPost(){
        List<String> postList = new ArrayList<>();
        postList.addAll(jdbcTemplate.queryForList("select url from post;",String.class));
        return postList;
    }


}
