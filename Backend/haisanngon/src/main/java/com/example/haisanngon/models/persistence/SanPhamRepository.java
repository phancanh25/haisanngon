package com.example.haisanngon.models.persistence;

import com.example.haisanngon.models.entities.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SanPhamRepository extends JpaRepository<SanPham,Integer> {
}
