package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.Role;
import com.example.haisanngon.models.persistence.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    private RoleRepository roleRepository;

    @Autowired
    public void setRoleRepository(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<Role> listAllList() {
        return roleRepository.findAll();
    }
}
