package com.example.haisanngon.models.entities;

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
@Table(name = "san_pham")
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "san_pham_id")
    private Integer sanPhamId;

    @Column(name = "ten_san_pham")
    private String tenSanPham;

    @Column(name = "don_vi")
    private String donVi;

    @Column(name = "gia_san_pham")
    private Integer giaSanPham;

    @Column(name = "anh_san_pham")
    private String anhSanPham;

    @Column(name = "mota_san_pham")
    private String motaSanPham;

    @Column(name = "ton_kho")
    private String tonKho;

    @Column(name = "dieu_kien_gia_si")
    private String dKGiaSi;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "loai_san_pham_id", nullable = false)
    private LoaiSanPham loaiSanPham;
}
