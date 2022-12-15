package com.example.haisanngon.controllers;

import com.example.haisanngon.HaisanngonApplication;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = {HaisanngonApplication.class})
@AutoConfigureMockMvc
public class SanPhamApiControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void createInvoiceTest() throws Exception {
        MvcResult result = mockMvc
                .perform(post("/sanPham/getAllSanPham")
                        .contentType(MediaType.APPLICATION_JSON))
                .andReturn();
    }

}