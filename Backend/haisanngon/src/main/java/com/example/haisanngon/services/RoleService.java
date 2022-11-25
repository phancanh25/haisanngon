package com.example.haisanngon.services;

import com.example.haisanngon.configurations.entities.Role;
import com.example.haisanngon.configurations.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
    @Autowired
    private RoleRepository roleRepository;

    public List<Role> listAllList() {
        return roleRepository.findAll();
    }

    public String testString(){
        return "Test nha";
    }

    public Role getRole(Integer id) {
        return roleRepository.findById(id).get();
    }
}
