package com.example.haisanngon.controllers.chitietphieunhap;

import com.example.haisanngon.models.entities.ChiTietPhieuNhap;
import com.example.haisanngon.services.ChiTietPhieuNhapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChiTietPhieuNhapController implements ChiTietPhieuNhapApi{
    private ChiTietPhieuNhapService chiTietPhieuNhapService;

    @Autowired
    public void setChiTietPhieuNhapService(ChiTietPhieuNhapService chiTietPhieuNhapService) {
        this.chiTietPhieuNhapService = chiTietPhieuNhapService;
    }

    @Override
    public List<ChiTietPhieuNhap> list() {
        return chiTietPhieuNhapService.listAllList();
    }
}
