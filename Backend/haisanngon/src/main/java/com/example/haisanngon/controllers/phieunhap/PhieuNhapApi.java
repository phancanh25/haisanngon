package com.example.haisanngon.controllers.phieunhap;

import com.example.haisanngon.configurations.entities.PhieuNhap;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "phieuNhap", description = "Rest API for phieu nhap methods", tags = { "PhieuNhap", })
@RequestMapping("/phieuNhap")
public interface PhieuNhapApi {
    @RequestMapping(value = "/getAllPhieuNhap", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<PhieuNhap> list();
}
