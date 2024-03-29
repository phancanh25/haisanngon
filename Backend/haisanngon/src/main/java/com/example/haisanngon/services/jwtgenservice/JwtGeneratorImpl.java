package com.example.haisanngon.services.jwtgenservice;

import com.example.haisanngon.dto.LoginInputDto;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
@Service
public class JwtGeneratorImpl implements JwtGeneratorInterface{
    @Value("${jwt.secret}")
    private String secret;
    public static String message = "Đăng nhập thành công";
    @Override
    public Map<String, String> generateToken(LoginInputDto loginInputDto) {
        String jwtToken="";
        jwtToken = Jwts.builder().setSubject(loginInputDto.getUsername()).setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256, "secret").compact();
        Map<String, String> jwtTokenGen = new HashMap<>();
        jwtTokenGen.put("token", jwtToken);
        jwtTokenGen.put("message", message);
        return jwtTokenGen;
    }
}
