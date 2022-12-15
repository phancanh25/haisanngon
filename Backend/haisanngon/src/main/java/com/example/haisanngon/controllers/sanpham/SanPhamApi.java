package com.example.haisanngon.controllers.sanpham;

import com.example.haisanngon.models.entities.SanPham;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "SanPham", description = "San Pham")
@RequestMapping("/sanPham")
public interface SanPhamApi {
    @Operation(summary = "sanPham", description = "San Pham", tags = {
            "sanPham",})
    @RequestMapping(value = "/getAllSanPham", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<SanPham> list();

    @Operation(summary = "Add 1 San Pham", description = "Add 1 San Pham", tags = {
            "sanPham",})
    @RequestMapping(value = "/addSanPham", method = RequestMethod.POST, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public void addSanPham(@RequestBody SanPham sanPham);


    @Operation(summary = "Get 1 San Pham", description = "Get 1 San Pham", tags = {
            "sanPham",})
    @RequestMapping(value = "/getOneSanPham", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public SanPham getSanPham(@PathVariable int idSanPham);

    @Operation(summary = "Edit 1 San Pham", description = "Edit 1 San Pham", tags = {
            "sanPham",})
    @RequestMapping(value = "/updateSanPham/{id}", method = RequestMethod.PUT, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public void updateSanPham(@PathVariable int idSanPham, @RequestBody SanPham sanPham) throws Exception;
}
