package com.example.haisanngon.controllers.nhanvien;

import com.example.haisanngon.configurations.entities.NhanVien;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "nhanVien", description = "Rest API for nhan vien methods", tags = { "NhanVien", })
@RequestMapping("/nhanVien")
public interface NhanVienApi {
    @RequestMapping(value = "/getAllNhanVien", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<NhanVien> list();
}
