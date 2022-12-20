package com.example.haisanngon.models.persistence;

import com.example.haisanngon.models.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String userName);

    @Query(value = "Select u.* from User u WHERE u.username=:username and u.password=:password",nativeQuery = true)
    User findByUsernameAndPassword(@Param("username") String username, @Param("password") String passWord);
//    public User findByUsername(String username);
//    @Query("Select u from User u WHERE u.username=:username and u.password=:password")
//    public User getUserByUserNameAndPassWord(String userName, String passWord);
}
