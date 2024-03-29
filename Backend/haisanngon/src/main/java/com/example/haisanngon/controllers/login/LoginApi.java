package com.example.haisanngon.controllers.login;

import com.example.haisanngon.dto.LoginInputDto;
import com.example.haisanngon.dto.response.ErrorResponse;
import com.example.haisanngon.exception.HSNException;
import com.example.haisanngon.models.entities.User;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
@Tag(name = "login", description = "Login")
@RequestMapping("/login")
public interface LoginApi {
    @Operation(summary = "signup", description = "signup", tags = {
            "signup",})
    @RequestMapping(value = "/signup", method = RequestMethod.POST, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    public ResponseEntity<?> postUser(@RequestBody User user);

    @Operation(summary = "signin", description = "signin", tags = {
            "signin",})
    @RequestMapping(value = "/signin", method = RequestMethod.POST, produces = "application/json")
    @ApiResponse(responseCode = "200", description = "OK", content = {
            @Content(
                    mediaType = "application/json",
                    schema = @Schema(implementation = List.class)
            )
    })
    @ApiResponse(responseCode = "400", description = "Bad Request", content = {
            @Content(
                    mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = ErrorResponse.class))
            )
    })
    @ApiResponse(responseCode = "422", description = "Unprocessable Entity", content = {
            @Content(
                    mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = ErrorResponse.class))
            )
    })
    @ApiResponse(responseCode = "500", description = "Internal Server Error", content = {
            @Content(

                    mediaType = "application/json",
                    array = @ArraySchema(schema = @Schema(implementation = ErrorResponse.class))
            )
    })
    public ResponseEntity<?> loginUser(@RequestBody LoginInputDto loginInputDto) throws HSNException;
}
