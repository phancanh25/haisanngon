package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.ChiTietDonHang;
import com.example.haisanngon.models.persistence.ChiTietDonHangRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChiTietDonHangService {
    private ChiTietDonHangRepository chiTietDonHangRepository;

    @Autowired
    public void setChiTietDonHangRepository(ChiTietDonHangRepository chiTietDonHangRepository) {
        this.chiTietDonHangRepository = chiTietDonHangRepository;
    }

    public List<ChiTietDonHang> listAllList() {
        return chiTietDonHangRepository.findAll();
    }
}
