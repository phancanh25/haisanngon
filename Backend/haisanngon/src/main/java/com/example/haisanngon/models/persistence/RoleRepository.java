package com.example.haisanngon.models.persistence;

import com.example.haisanngon.models.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role,Integer> {
}
