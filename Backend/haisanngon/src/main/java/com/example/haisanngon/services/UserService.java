package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.User;
import com.example.haisanngon.models.persistence.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;

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

    public User getUserByNameAndPassword(String userName, String passWord){
        return userRepository.findByUsernameAndPassword(userName,passWord);
    }
}
