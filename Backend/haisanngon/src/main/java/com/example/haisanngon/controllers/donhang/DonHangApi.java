package com.example.haisanngon.controllers.donhang;

import com.example.haisanngon.models.entities.DonHang;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "donHang", description = "Don Hang")
@RequestMapping("/donHang")
public interface DonHangApi {
    @Operation(summary = "donHang", description = "Don Hang", tags = {
            "Don Hang",})
    @RequestMapping(value = "/getAllDonHang", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<DonHang> list();
}
