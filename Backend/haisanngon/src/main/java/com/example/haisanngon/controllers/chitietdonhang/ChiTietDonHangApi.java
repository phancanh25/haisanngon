package com.example.haisanngon.controllers.chitietdonhang;

import com.example.haisanngon.models.entities.ChiTietDonHang;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "chiTietDonHang", description = "Chi Tiet Don Hang")
@RequestMapping("/chiTietDonHang")
public interface ChiTietDonHangApi {
    @Operation(summary = "chiTietDonHang", description = "Chi Tiet Don Hang", tags = {
            "chiTietDonHang",})
    @RequestMapping(value = "/getAllChiTietDonHang", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<ChiTietDonHang> list();
}