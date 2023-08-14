package com.example.hackathon.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "category")
//카테고리 eneity
public class Category {

    @Id
    private Long category_id;

    //카테고리 이름
    @Column(name = "name")
    private String name;

    }


