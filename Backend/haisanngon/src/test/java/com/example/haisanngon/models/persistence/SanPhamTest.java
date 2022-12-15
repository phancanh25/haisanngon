package com.example.haisanngon.models.persistence;

import com.example.haisanngon.models.entities.SanPham;
import com.example.haisanngon.utils.DbUnitTestConfiguration;
import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import com.github.springtestdbunit.annotation.DbUnitConfiguration;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import java.util.Optional;

@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        DirtiesContextTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
@DatabaseSetup("classpath:haisanngon-sanpham.xml")
@DbUnitConfiguration(databaseConnection = {"dbUnitDatabaseConnection"})
@ContextConfiguration(classes = {DbUnitTestConfiguration.class})
public class SanPhamTest {
    @Autowired
    private SanPhamRepository sanPhamRepository;

    @Test
    public void findByCodeTypeAndCodeTest() {
        Optional<SanPham> sanPham = sanPhamRepository.findById(1);
        Assert.assertNotNull(sanPham);
        Assert.assertTrue(sanPham.get().getSanPhamId() == 1);
    }
}
