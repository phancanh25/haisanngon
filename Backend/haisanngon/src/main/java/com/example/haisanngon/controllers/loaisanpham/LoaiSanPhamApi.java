package com.example.haisanngon.controllers.loaisanpham;

import com.example.haisanngon.models.entities.LoaiSanPham;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "loaiSanPham", description = "Loai San Pham")
@RequestMapping("/loaiSanPham")
public interface LoaiSanPhamApi {
    @Operation(summary = "loaiSanPham", description = "Loai San Pham", tags = {
            "LoaiSanPham",})
    @RequestMapping(value = "/getAllLoaiSanPham", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<LoaiSanPham> list();
}
