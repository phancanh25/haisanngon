package com.example.haisanngon.controllers.khachhang;

import com.example.haisanngon.models.entities.KhachHang;
import com.example.haisanngon.services.KhachHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KhachHangController implements KhachHangApi{
    private KhachHangService khachHangService;

    @Autowired
    public void setKhachHangService(KhachHangService khachHangService) {
        this.khachHangService = khachHangService;
    }

    @Override
    public List<KhachHang> list() {
        return khachHangService.listAllList();
    }
}
