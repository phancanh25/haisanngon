package com.example.haisanngon.configurations.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "loai_san_pham")
public class LoaiSanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "loai_san_pham_id")
    private Integer khachHangId;

    @Column(name = "ma_loai_san_pham", unique = true)
    private String maLoaiSanPham;

    @Column(name = "ten_loai_san_pham")
    private String tenLoaiSanPham;
}
