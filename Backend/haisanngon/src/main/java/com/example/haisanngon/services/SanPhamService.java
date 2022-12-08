package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.SanPham;
import com.example.haisanngon.models.repositories.SanPhamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SanPhamService {
    private SanPhamRepository sanPhamRepository;

    @Autowired
    public void setSanPhamRepository(SanPhamRepository sanPhamRepository) {
        this.sanPhamRepository = sanPhamRepository;
    }

    public List<SanPham> listAllList() {
        return sanPhamRepository.findAll();
    }
}
