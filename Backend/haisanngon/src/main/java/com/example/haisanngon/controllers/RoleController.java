package com.example.haisanngon.controllers;

import com.example.haisanngon.configurations.entities.Role;
import com.example.haisanngon.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


@RestController
public class RoleController implements RoleApi {

    @Autowired
    private RoleService roleService;

    @Override
    public String sayHello() {
        return roleService.testString();
    }

    @Override
    public List<Role> list() {
        return roleService.listAllList();
    }

//    public void test() throws SQLException {
//        Connection dbConn = DriverManager.getConnection(
//                "jdbc:mysql://localhost:3306/hai_san_ngon?useSSL=false", "root", "Unlock123@");
////        Optional<Role> role = roleRepository.findById(1);
//        String query = "select * from role";
//        if (dbConn != null) {
//            System.out.println("Connection Successful");
//        }
//        Statement stmt = null;
//        stmt = dbConn.createStatement();
//        ResultSet rs = null;
//        Role role = null;
//        List<Role> list = new ArrayList<Role>();
//        while (rs.next()) {
//            role = new Role();
//            role.setMaRole(rs.getInt(1));
//
//            list.add(role);
//        }
//        System.out.println(list);
//    }

}
