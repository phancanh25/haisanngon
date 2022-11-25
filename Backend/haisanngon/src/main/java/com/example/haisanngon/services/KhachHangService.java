package com.example.haisanngon.services;

import com.example.haisanngon.configurations.entities.KhachHang;
import com.example.haisanngon.configurations.entities.Role;
import com.example.haisanngon.configurations.repositories.KhachHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class KhachHangService {
    private KhachHangRepository khachHangRepository;

    @Autowired
    public void setKhachHangRepository(KhachHangRepository khachHangRepository) {
        this.khachHangRepository = khachHangRepository;
    }

    public List<KhachHang> listAllList() {
        return
                khachHangRepository.findAll();
    }
}