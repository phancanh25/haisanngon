package com.example.haisanngon.controllers.nhanvien;

import com.example.haisanngon.configurations.entities.NhanVien;
import com.example.haisanngon.services.NhanVienService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class NhanVienController implements NhanVienApi{
    private NhanVienService nhanVienService;

    @Autowired
    public void setNhanVienService(NhanVienService nhanVienService) {
        this.nhanVienService = nhanVienService;
    }

    @Override
    public List<NhanVien> list() {
        return nhanVienService.listAllList();
    }
}
