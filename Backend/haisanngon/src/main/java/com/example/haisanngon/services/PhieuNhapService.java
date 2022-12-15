package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.PhieuNhap;
import com.example.haisanngon.models.persistence.PhieuNhapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhieuNhapService {
    private PhieuNhapRepository phieuNhapRepository;

    @Autowired
    public void setPhieuNhapRepository(PhieuNhapRepository phieuNhapRepository) {
        this.phieuNhapRepository = phieuNhapRepository;
    }

    public List<PhieuNhap> listAllList() {
        return phieuNhapRepository.findAll();
    }
}
