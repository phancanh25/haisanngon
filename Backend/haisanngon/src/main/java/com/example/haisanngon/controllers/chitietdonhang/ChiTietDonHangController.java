package com.example.haisanngon.controllers.chitietdonhang;

import com.example.haisanngon.models.entities.ChiTietDonHang;
import com.example.haisanngon.services.ChiTietDonHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ChiTietDonHangController implements ChiTietDonHangApi {
    private ChiTietDonHangService chiTietDonHangService;

    @Autowired
    public void setChiTietDonHangService(ChiTietDonHangService chiTietDonHangService) {
        this.chiTietDonHangService = chiTietDonHangService;
    }

    @Override
    public List<ChiTietDonHang> list() {
        return chiTietDonHangService.listAllList();
    }
}
