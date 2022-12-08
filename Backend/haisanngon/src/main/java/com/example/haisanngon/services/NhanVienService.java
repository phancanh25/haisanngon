package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.NhanVien;
import com.example.haisanngon.models.repositories.NhanVienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NhanVienService {
    private NhanVienRepository nhanVienRepository;

    @Autowired
    public void setNhanVienRepository(NhanVienRepository nhanVienRepository) {
        this.nhanVienRepository = nhanVienRepository;
    }

    public List<NhanVien> listAllList() {
        return nhanVienRepository.findAll();
    }
}
