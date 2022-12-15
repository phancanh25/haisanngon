package com.example.haisanngon.controllers.sanpham;

import com.example.haisanngon.models.entities.SanPham;
import com.example.haisanngon.services.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SanPhamController implements SanPhamApi {
    private SanPhamService sanPhamService;

    @Autowired
    public void setSanPhamService(SanPhamService sanPhamService) {
        this.sanPhamService = sanPhamService;
    }

    @Override
    public List<SanPham> list() {
        return sanPhamService.listAllList();
    }

    @Override
    public SanPham getSanPham(int idSanPham) {
        return sanPhamService.getOneSanPham(idSanPham);
    }

    @Override
    public void addSanPham(SanPham sanPham) {
        sanPhamService.addASanPham(sanPham);
    }

    @Override
    public void updateSanPham(int idSanPham, SanPham sanPham) throws Exception {
        sanPhamService.updateSanPham(idSanPham,sanPham);
    }
}
