package com.example.hkp.Repository;

import com.example.hkp.Entity.Data;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface filterRepository extends JpaRepository<Data, Long> {

}
