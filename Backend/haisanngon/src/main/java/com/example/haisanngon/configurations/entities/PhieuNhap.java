package com.example.haisanngon.configurations.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@Table(name = "phieu_nhap")
public class PhieuNhap {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "phieu_nhap_id")
    private Integer phieuNhapId;

    @Column(name = "chi_tiet")
    private String chiTiet;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "nhan_vien_id", nullable = false)
    private NhanVien nhanVien;
}
