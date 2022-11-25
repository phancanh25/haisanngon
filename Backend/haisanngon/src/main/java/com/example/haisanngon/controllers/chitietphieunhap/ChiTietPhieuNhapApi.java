package com.example.haisanngon.controllers.chitietphieunhap;

import com.example.haisanngon.configurations.entities.ChiTietPhieuNhap;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "chiTietPhieuNhap", description = "Rest API for chi tiet phieu nhap methods", tags = { "ChiTietPhieuNhap", })
@RequestMapping("/chiTietPhieuNhap")
public interface ChiTietPhieuNhapApi {
    @RequestMapping(value = "/getAllChiTietPhieuNhap", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<ChiTietPhieuNhap> list();
}
