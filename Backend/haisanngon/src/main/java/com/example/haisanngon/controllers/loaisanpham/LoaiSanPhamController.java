package com.example.haisanngon.controllers.loaisanpham;

import com.example.haisanngon.configurations.entities.LoaiSanPham;
import com.example.haisanngon.services.LoaiSanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoaiSanPhamController implements LoaiSanPhamApi{
    private LoaiSanPhamService loaiSanPhamService;

    @Autowired
    public void setLoaiSanPhamService(LoaiSanPhamService loaiSanPhamService) {
        this.loaiSanPhamService = loaiSanPhamService;
    }

    @Override
    public List<LoaiSanPham> list() {
        return loaiSanPhamService.listAllList();
    }
}
