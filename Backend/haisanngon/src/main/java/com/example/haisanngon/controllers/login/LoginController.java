package com.example.haisanngon.controllers.login;

import com.example.haisanngon.dto.LoginInputDto;
import com.example.haisanngon.exception.HSNException;
import com.example.haisanngon.models.entities.User;
import com.example.haisanngon.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController implements LoginApi{
    private UserService userService;

    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public ResponseEntity<?> postUser(User user) {
        try{
            userService.saveUser(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @Override
    public ResponseEntity<?> loginUser(LoginInputDto loginInputDto) throws HSNException {
        return userService.getUserByNameAndPassword(loginInputDto);
    }
}
