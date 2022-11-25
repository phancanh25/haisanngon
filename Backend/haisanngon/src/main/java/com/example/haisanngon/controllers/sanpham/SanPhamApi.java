package com.example.haisanngon.controllers.sanpham;

import com.example.haisanngon.configurations.entities.SanPham;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "sanPham", description = "Rest API for san pham methods", tags = { "SanPham", })
@RequestMapping("/sanPham")
public interface SanPhamApi {
    @RequestMapping(value = "/getAllSanPham", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<SanPham> list();
}
