package com.example.haisanngon.controllers.role;

import com.example.haisanngon.configurations.entities.Role;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Api(value = "role", description = "Rest API for role methods", tags = { "User", })
@RequestMapping("/role")
public interface RoleApi {
    @RequestMapping(value = "/getAllRole", method = RequestMethod.GET, produces = "application/json")
    @ApiResponses({
            @ApiResponse(code = 200, message = "OK", response = List.class)})
    public List<Role> list();
}
