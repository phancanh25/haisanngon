package com.example.haisanngon.controllers.donhang;

import com.example.haisanngon.models.entities.DonHang;
import com.example.haisanngon.services.DonHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DonHangController implements DonHangApi{
    private DonHangService donHangService;

    @Autowired
    public void setDonHangService(DonHangService donHangService) {
        this.donHangService = donHangService;
    }

    @Override
    public List<DonHang> list() {
        return donHangService.listAllList();
    }
}
