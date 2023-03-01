package com.example.haisanngon.services;

import com.example.haisanngon.dto.LoginInputDto;
import com.example.haisanngon.exception.HSNException;
import com.example.haisanngon.models.entities.User;
import com.example.haisanngon.models.persistence.UserRepository;
import com.example.haisanngon.services.jwtgenservice.JwtGeneratorInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;
    private JwtGeneratorInterface jwtGenerator;
    @Autowired
    public void setJwtGenerator(JwtGeneratorInterface jwtGenerator) {
        this.jwtGenerator = jwtGenerator;
    }
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> listAllList() {
        return userRepository.findAll();
    }

    public void saveUser(User user){
        userRepository.save(user);
    }

    public ResponseEntity<?> getUserByNameAndPassword(LoginInputDto loginInputDto) throws HSNException {
        if(loginInputDto.getUsername() == null || loginInputDto.getPassword() == null) {
            throw new HSNException(String.format("UserName or Password is Empty"));
        }
        User user = userRepository.findByUsernameAndPassword(loginInputDto.getUsername(),loginInputDto.getPassword());
        if(user == null){
            throw new HSNException(String.format("UserName or Password is Invalid"));
        }
        return new ResponseEntity<>(jwtGenerator.generateToken(loginInputDto), HttpStatus.OK);
    }
}
