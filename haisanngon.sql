-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.29 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.2.0.6576
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for hai_san_ngon
CREATE DATABASE IF NOT EXISTS `hai_san_ngon` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `hai_san_ngon`;

-- Dumping structure for table hai_san_ngon.chi_tiet_don_hang
CREATE TABLE IF NOT EXISTS `chi_tiet_don_hang` (
  `chi_tiet_don_hang_id` int NOT NULL AUTO_INCREMENT,
  `gia` varchar(45) NOT NULL,
  `so_luong` int NOT NULL,
  `san_pham_id` int NOT NULL,
  `don_hang_id` int NOT NULL,
  `chi_tiet` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`chi_tiet_don_hang_id`),
  UNIQUE KEY `idchi_tiet_don_hang_id_UNIQUE` (`chi_tiet_don_hang_id`),
  KEY `fk_don_hang_idx` (`don_hang_id`),
  KEY `fk_san_pham_idx` (`san_pham_id`),
  CONSTRAINT `fk_don_hang` FOREIGN KEY (`don_hang_id`) REFERENCES `don_hang` (`don_hang_id`),
  CONSTRAINT `fk_san_pham` FOREIGN KEY (`san_pham_id`) REFERENCES `san_pham` (`san_pham_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.chi_tiet_don_hang: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.chi_tiet_phieu_nhap
CREATE TABLE IF NOT EXISTS `chi_tiet_phieu_nhap` (
  `chi_tiet_phieu_nhap_id` int NOT NULL AUTO_INCREMENT,
  `so_luong` int NOT NULL,
  `don_vi` varchar(45) NOT NULL,
  `san_pham_id` int NOT NULL,
  `phieu_nhap_id` int NOT NULL,
  PRIMARY KEY (`chi_tiet_phieu_nhap_id`),
  UNIQUE KEY `chi_tiet_phieu_nhap_id_UNIQUE` (`chi_tiet_phieu_nhap_id`),
  KEY `fk_sp_idx` (`san_pham_id`),
  KEY `fk_phieu_nhap_idx` (`phieu_nhap_id`),
  CONSTRAINT `fk_phieu_nhap` FOREIGN KEY (`phieu_nhap_id`) REFERENCES `phieu_nhap` (`phieu_nhap_id`),
  CONSTRAINT `fk_sp` FOREIGN KEY (`san_pham_id`) REFERENCES `san_pham` (`san_pham_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.chi_tiet_phieu_nhap: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.don_hang
CREATE TABLE IF NOT EXISTS `don_hang` (
  `don_hang_id` int NOT NULL AUTO_INCREMENT,
  `tong_gia` varchar(45) NOT NULL,
  `trang_thai` varchar(45) NOT NULL,
  `khach_hang_id` int NOT NULL,
  `nhan_vien_id` int NOT NULL,
  PRIMARY KEY (`don_hang_id`),
  UNIQUE KEY `iddon_hang_id_UNIQUE` (`don_hang_id`),
  KEY `fk_khach_hang_idx` (`khach_hang_id`),
  KEY `fk_nhan_vien_idx` (`nhan_vien_id`),
  CONSTRAINT `fk_khach_hang` FOREIGN KEY (`khach_hang_id`) REFERENCES `khach_hang` (`khach_hang_id`),
  CONSTRAINT `fk_nhan_vien` FOREIGN KEY (`nhan_vien_id`) REFERENCES `nhan_vien` (`nhan_vien_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.don_hang: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.khach_hang
CREATE TABLE IF NOT EXISTS `khach_hang` (
  `khach_hang_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `dia_chi` varchar(200) NOT NULL,
  `so_dien_thoai` varchar(20) NOT NULL,
  PRIMARY KEY (`khach_hang_id`),
  UNIQUE KEY `khach_hang_id_UNIQUE` (`khach_hang_id`),
  UNIQUE KEY `user_name_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.khach_hang: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.loai_san_pham
CREATE TABLE IF NOT EXISTS `loai_san_pham` (
  `loai_san_pham_id` int NOT NULL AUTO_INCREMENT,
  `ma_loai_san_pham` int NOT NULL,
  `ten_loai_san_pham` varchar(50) NOT NULL,
  PRIMARY KEY (`loai_san_pham_id`),
  UNIQUE KEY `loai_san_pham_id_UNIQUE` (`loai_san_pham_id`),
  UNIQUE KEY `ma_loai_san_pham_UNIQUE` (`ma_loai_san_pham`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.loai_san_pham: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.nhan_vien
CREATE TABLE IF NOT EXISTS `nhan_vien` (
  `nhan_vien_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `ho_ten` varchar(45) NOT NULL,
  `ngay_sinh` datetime DEFAULT NULL,
  `gioi_tinh` varchar(45) NOT NULL,
  `cccd` varchar(20) NOT NULL,
  `dia_chi` varchar(200) NOT NULL,
  `so_dien_thoai` varchar(45) NOT NULL,
  `hinh_anh` varchar(45) NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`nhan_vien_id`),
  UNIQUE KEY `nhan_vien_id_UNIQUE` (`nhan_vien_id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  KEY `role_nv_idx` (`role_id`),
  CONSTRAINT `role_nv` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.nhan_vien: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.phieu_nhap
CREATE TABLE IF NOT EXISTS `phieu_nhap` (
  `phieu_nhap_id` int NOT NULL AUTO_INCREMENT,
  `nhan_vien_id` int NOT NULL,
  `chi_tiet` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`phieu_nhap_id`),
  UNIQUE KEY `phieu_nhap_id_UNIQUE` (`phieu_nhap_id`),
  KEY `fk_nhan_vien_idx` (`nhan_vien_id`),
  CONSTRAINT `fk_nvien` FOREIGN KEY (`nhan_vien_id`) REFERENCES `nhan_vien` (`nhan_vien_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.phieu_nhap: ~0 rows (approximately)

-- Dumping structure for table hai_san_ngon.role
CREATE TABLE IF NOT EXISTS `role` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `ma_role` int NOT NULL,
  `ten_role` varchar(50) NOT NULL,
  PRIMARY KEY (`role_id`),
  UNIQUE KEY `role_id_UNIQUE` (`role_id`),
  UNIQUE KEY `ma_role_UNIQUE` (`ma_role`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.role: ~1 rows (approximately)
REPLACE INTO `role` (`role_id`, `ma_role`, `ten_role`) VALUES
	(1, 1, '"Admin"');

-- Dumping structure for table hai_san_ngon.san_pham
CREATE TABLE IF NOT EXISTS `san_pham` (
  `san_pham_id` int NOT NULL AUTO_INCREMENT,
  `ten_san_pham` varchar(50) NOT NULL,
  `don_vi` varchar(45) NOT NULL,
  `gia_san_pham` int NOT NULL,
  `anh_san_pham` varchar(45) NOT NULL,
  `mota_san_pham` varchar(45) DEFAULT NULL,
  `ton_kho` int NOT NULL,
  `dieu_kien_gia_si` int NOT NULL,
  `loai_san_pham_id` int NOT NULL,
  PRIMARY KEY (`san_pham_id`),
  UNIQUE KEY `san_pham_id_UNIQUE` (`san_pham_id`),
  KEY `FK8ixkt2s9hxy5bvdgk6g60ewax` (`loai_san_pham_id`),
  CONSTRAINT `FK8ixkt2s9hxy5bvdgk6g60ewax` FOREIGN KEY (`loai_san_pham_id`) REFERENCES `loai_san_pham` (`loai_san_pham_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table hai_san_ngon.san_pham: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
