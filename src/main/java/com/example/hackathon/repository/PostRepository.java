package com.example.hackathon.repository;


import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.checkerframework.checker.units.qual.A;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
@RequiredArgsConstructor
public class  PostRepository {

    private final JdbcTemplate jdbcTemplate;

    //카테고리 url조회
    public List<String> getUrl(List<Integer> subcategoryIds) {
        String sql = "SELECT p.url\n" +
                "FROM post p\n" +
                "JOIN mapping m ON p.post_id = m.post_id\n" +
                "WHERE m.subcategory_id IN (?, ?, ?, ?)";

        Object[] params = subcategoryIds.toArray();

        return jdbcTemplate.queryForList(sql, params, String.class);
    }

    //카테고리 게시물 정보 조회
    public List<Map<String, Object>> getPostDetails(List<Integer> subcategoryIds) {
        String sql = "SELECT CONCAT(p.url, ' - ', p.item, ' - ', p.company, ' - ', p.color, ' - ', p.likenum)\n" +
                " FROM post p\n" +
                " JOIN mapping m ON p.post_id = m.post_id\n" +
                " WHERE m.subcategory_id IN (?, ?, ?, ?)";

        Object[] params = subcategoryIds.toArray();

        return jdbcTemplate.queryForList(sql, params);
    }

}