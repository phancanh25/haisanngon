package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.SanPham;
import com.example.haisanngon.models.persistence.SanPhamRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SanPhamService {
    private SanPhamRepository sanPhamRepository;

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    public void setSanPhamRepository(SanPhamRepository sanPhamRepository) {
        this.sanPhamRepository = sanPhamRepository;
    }

    public List<SanPham> listAllList() {
        return sanPhamRepository.findAll();
    }

    public SanPham getOneSanPham(int id) {
        return sanPhamRepository.findById(id).get();
    }

    public SanPham addASanPham(SanPham sanPham) {
        return sanPhamRepository.save(sanPham);
    }

    public void updateSanPham(int sanPhamId, SanPham sanPham) throws Exception {
        SanPham sanPhamUpdate = sanPhamRepository.findById(sanPhamId).get();
        String requestBody = objectMapper.writeValueAsString(sanPham);
        sanPhamUpdate = objectMapper.readValue(requestBody,SanPham.class);
        sanPhamRepository.save(sanPhamUpdate);
    }
}
