package com.example.haisanngon.controllers.chitietphieunhap;

import com.example.haisanngon.models.entities.ChiTietPhieuNhap;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "chiTietPhieuNhap", description = "Chi tiet phieu nhap")
@RequestMapping("/chiTietPhieuNhap")
public interface ChiTietPhieuNhapApi {
    @Operation(summary = "ChiTietPhieuNhap", description = "Chi Tiet Phieu Nhap", tags = {
            "ChiTietPhieuNhap",})
    @RequestMapping(value = "/getAllChiTietPhieuNhap", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<ChiTietPhieuNhap> list();
}
