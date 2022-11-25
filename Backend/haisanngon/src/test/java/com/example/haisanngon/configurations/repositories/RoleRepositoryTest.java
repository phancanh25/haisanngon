package com.example.haisanngon.configurations.repositories;

import com.example.haisanngon.configurations.entities.Role;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;
import static junit.framework.TestCase.assertEquals;
import static org.junit.Assert.*;

@SpringBootTest
class RoleRepositoryTest {
    @Autowired
    private RoleRepository roleRepository;
    @Test
    public void test(){
        Optional<Role> role = roleRepository.findById(1);
        assertNotNull(role);
    }




}