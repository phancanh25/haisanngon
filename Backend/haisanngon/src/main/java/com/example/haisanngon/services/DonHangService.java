package com.example.haisanngon.services;

import com.example.haisanngon.configurations.entities.DonHang;
import com.example.haisanngon.configurations.repositories.DonHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonHangService {
    private DonHangRepository donHangRepository;

    @Autowired
    public void setDonHangRepository(DonHangRepository donHangRepository) {
        this.donHangRepository = donHangRepository;
    }

    public List<DonHang> listAllList() {
        return donHangRepository.findAll();
    }
}
