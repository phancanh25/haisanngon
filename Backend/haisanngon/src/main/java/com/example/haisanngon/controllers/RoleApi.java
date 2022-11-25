package com.example.haisanngon.controllers;

import com.example.haisanngon.configurations.entities.Role;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "role", description = "Rest API for user methods", tags = { "User", })
@RequestMapping("/role")
public interface RoleApi {
    @RequestMapping(value = "/test", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = String.class)})
    public String sayHello();

    @RequestMapping(value = "/getarole", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<Role> list();
}
