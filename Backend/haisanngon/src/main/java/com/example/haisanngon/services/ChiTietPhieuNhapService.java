package com.example.haisanngon.services;

import com.example.haisanngon.configurations.entities.ChiTietPhieuNhap;
import com.example.haisanngon.configurations.repositories.ChiTietPhieuNhapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChiTietPhieuNhapService {
    private ChiTietPhieuNhapRepository chiTietPhieuNhapRepository;

    @Autowired
    public void setChiTietPhieuNhapRepository(ChiTietPhieuNhapRepository chiTietPhieuNhapRepository) {
        this.chiTietPhieuNhapRepository = chiTietPhieuNhapRepository;
    }

    public List<ChiTietPhieuNhap> listAllList(){
        return chiTietPhieuNhapRepository.findAll();
    }
}
