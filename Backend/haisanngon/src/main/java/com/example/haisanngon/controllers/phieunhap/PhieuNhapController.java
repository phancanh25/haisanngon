package com.example.haisanngon.controllers.phieunhap;

import com.example.haisanngon.configurations.entities.PhieuNhap;
import com.example.haisanngon.services.PhieuNhapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PhieuNhapController implements PhieuNhapApi{
    private PhieuNhapService phieuNhapService;

    @Autowired
    public void setPhieuNhapService(PhieuNhapService phieuNhapService) {
        this.phieuNhapService = phieuNhapService;
    }

    @Override
    public List<PhieuNhap> list() {
        return phieuNhapService.listAllList();
    }
}
