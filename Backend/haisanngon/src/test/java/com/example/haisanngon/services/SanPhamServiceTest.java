package com.example.haisanngon.services;

import com.example.haisanngon.models.entities.SanPham;
import com.example.haisanngon.models.persistence.SanPhamRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.Assert.assertNotNull;


@ExtendWith(MockitoExtension.class)
public class SanPhamServiceTest {
    @Mock
    private SanPhamRepository sanPhamRepository;

    @InjectMocks
    private SanPhamService sanPhamService;

    @Test
    public void listAllListTest() throws Exception {
        List<SanPham> listSanPham = sanPhamService.listAllList();
        assertNotNull(listSanPham);
    }
}