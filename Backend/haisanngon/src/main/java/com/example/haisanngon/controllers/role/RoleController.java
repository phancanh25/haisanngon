package com.example.haisanngon.controllers.role;

import com.example.haisanngon.models.entities.Role;
import com.example.haisanngon.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class RoleController implements RoleApi {
    private RoleService roleService;

    @Autowired
    public void setRoleService(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    public List<Role> list() {
        return roleService.listAllList();
    }
}
