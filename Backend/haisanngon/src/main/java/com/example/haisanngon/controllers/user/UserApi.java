package com.example.haisanngon.controllers.user;

import com.example.haisanngon.models.entities.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Tag(name = "nhanVien", description = "Nhan Vien")
@RequestMapping("/nhanVien")
public interface UserApi {
    @Operation(summary = "Nhan Vien", description = "Nhan Vien", tags = {
            "Nhan Vien",})
    @RequestMapping(value = "/getAllNhanVien", method = RequestMethod.GET, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public List<User> list();
}
