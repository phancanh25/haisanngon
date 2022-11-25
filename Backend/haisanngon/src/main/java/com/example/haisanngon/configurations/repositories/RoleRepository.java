package com.example.haisanngon.configurations.repositories;

import com.example.haisanngon.configurations.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role,Integer> {
}
