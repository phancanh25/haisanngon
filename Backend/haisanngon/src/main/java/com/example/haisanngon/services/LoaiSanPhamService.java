package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.LoaiSanPham;
import com.example.haisanngon.models.persistence.LoaiSanPhamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoaiSanPhamService {
    private LoaiSanPhamRepository loaiSanPhamRepository;

    @Autowired
    public void setLoaiSanPhamRepository(LoaiSanPhamRepository loaiSanPhamRepository) {
        this.loaiSanPhamRepository = loaiSanPhamRepository;
    }

    public List<LoaiSanPham> listAllList() {
        return loaiSanPhamRepository.findAll();
    }
}
