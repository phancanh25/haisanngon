package com.example.haisanngon.controllers.chitietdonhang;

import com.example.haisanngon.configurations.entities.ChiTietDonHang;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "chiTietDonHang", description = "Rest API for chi tiet don hang methods", tags = { "ChiTietDonHang", })
@RequestMapping("/chiTietDonHang")
public interface ChiTietDonHangApi {
    @RequestMapping(value = "/getAllChiTietDonHang", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<ChiTietDonHang> list();
}
