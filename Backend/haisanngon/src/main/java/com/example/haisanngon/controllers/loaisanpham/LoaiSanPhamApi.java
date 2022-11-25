package com.example.haisanngon.controllers.loaisanpham;

import com.example.haisanngon.configurations.entities.LoaiSanPham;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "loaiSanPham", description = "Rest API for loai san pham methods", tags = { "LoaiSanPham", })
@RequestMapping("/loaiSanPham")
public interface LoaiSanPhamApi {
    @RequestMapping(value = "/getAllLoaiSanPham", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<LoaiSanPham> list();
}
