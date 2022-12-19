package com.example.haisanngon.services.jwtgenservice;

import com.example.haisanngon.dto.LoginInputDto;

import java.util.Map;

public interface JwtGeneratorInterface {
    Map<String, String> generateToken(LoginInputDto loginInputDto);
}
