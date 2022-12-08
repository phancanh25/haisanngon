package com.example.haisanngon.controllers.khachhang;

import com.example.haisanngon.models.entities.KhachHang;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "khachHang", description = "Khach Hang")
@RequestMapping("/khachHang")
public interface KhachHangApi {
    @Operation(summary = "Khach Hang", description = "Khach Hang", tags = {
            "KhachHang",})
    @RequestMapping(value = "/getAllKhachHang", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<KhachHang> list();
}
