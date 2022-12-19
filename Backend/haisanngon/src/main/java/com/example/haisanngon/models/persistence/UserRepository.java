package com.example.haisanngon.models.persistence;

import com.example.haisanngon.models.entities.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUserName(String userName);
//    public User findByUsername(String username);
//    @Query("Select u from User u WHERE u.username=:username and u.password=:password")
//    public User getUserByUserNameAndPassWord(String userName, String passWord);
}
