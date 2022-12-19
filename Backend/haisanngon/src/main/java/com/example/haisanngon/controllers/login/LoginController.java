package com.example.haisanngon.controllers.login;

import com.example.haisanngon.dto.LoginInputDto;
import com.example.haisanngon.exception.HSNException;
import com.example.haisanngon.models.entities.User;
import com.example.haisanngon.services.UserService;
import com.example.haisanngon.services.jwtgenservice.JwtGeneratorInterface;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController implements LoginApi{
    private UserService userService;
    private JwtGeneratorInterface jwtGenerator;
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
    public ResponseEntity<?> loginUser(LoginInputDto loginInputDto) {
        try {
            if(loginInputDto.getUserName() == null || loginInputDto.getPassword() == null) {
                throw new HSNException(String.format("UserName or Password is Empty"));
            }
            User userData = userService.getUserByNameAndPassword(loginInputDto.getUserName(), loginInputDto.getPassword());
            if(userData == null){
                throw new HSNException(String.format("UserName or Password is Invalid"));
            }
            return new ResponseEntity<>(jwtGenerator.generateToken(loginInputDto), HttpStatus.OK);
        } catch (HSNException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }


}
