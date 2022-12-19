package com.example.haisanngon.controllers.user;

import com.example.haisanngon.models.entities.User;
import com.example.haisanngon.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController implements UserApi {
    private UserService nhanVienService;

    @Autowired
    public void setNhanVienService(UserService nhanVienService) {
        this.nhanVienService = nhanVienService;
    }

    @Override
    public List<User> list() {
        return nhanVienService.listAllList();
    }
}
