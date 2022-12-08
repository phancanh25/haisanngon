package com.example.haisanngon.controllers.phieunhap;

import com.example.haisanngon.models.entities.PhieuNhap;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "chiTietDonHang", description = "test")
@RequestMapping("/phieuNhap")
public interface PhieuNhapApi {
    @Operation(summary = "chiTietDonHang", description = "chiTietDonHang", tags = {
            "chiTietDonHang",})
    @RequestMapping(value = "/getAllPhieuNhap", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<PhieuNhap> list();
}
