package com.example.hkp.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "mapping")
//post - subcategory
public class mapping {

    @Id
    private Long mapping_id;

    @ManyToOne
    private Subcategory subcategory_id;

    @ManyToOne
    private Post post_id;
}