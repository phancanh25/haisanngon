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
@Table(name = "khach_hang")
public class KhachHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "khach_hang_id")
    private Integer khachHangId;

    @Column(name = "username", unique = true)
    private String userName;

    @Column(name = "password")
    private String passWord;

    @Column(name = "dia_chi")
    private String diaChi;
//int->String
    @Column(name = "so_dien_thoai")
    private String soDienThoai;
}
