package com.example.haisanngon.controllers.sanpham;

import com.example.haisanngon.configurations.entities.SanPham;
import com.example.haisanngon.services.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SanPhamController implements SanPhamApi{
    private SanPhamService sanPhamService;

    @Autowired
    public void setSanPhamService(SanPhamService sanPhamService) {
        this.sanPhamService = sanPhamService;
    }

    @Override
    public List<SanPham> list() {
        return sanPhamService.listAllList();
    }
}
