package com.example.haisanngon.controllers.khachhang;

import com.example.haisanngon.configurations.entities.KhachHang;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "khachHang", description = "Rest API for khach hang methods", tags = { "KhachHang", })
@RequestMapping("/khachHang")
public interface KhachHangApi {
    @RequestMapping(value = "/getAllKhachHang", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<KhachHang> list();
}
