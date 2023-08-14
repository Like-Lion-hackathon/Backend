package com.example.hackathon.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "subcategory")
public class Subcategory {

    @Id
    private Long subcategory_id;

    private String name;

    @ManyToOne
    private Category category;

}