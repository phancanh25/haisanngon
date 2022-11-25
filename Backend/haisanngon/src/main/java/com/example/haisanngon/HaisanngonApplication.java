package com.example.haisanngon;

import com.example.haisanngon.Persistence.PersistenceConfiguration;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@Import({PersistenceConfiguration.class})
@EnableTransactionManagement
@EnableJpaRepositories(
		basePackages = {"com.example.haisanngon.configurations.repositories"}
)
@EntityScan("com.example.haisanngon.configurations.entities")
@ComponentScan(basePackages = {
		"com.example.haisanngon.controllers", "com.example.haisanngon.services", "com.example.haisanngon.configurations.repositories", "com.example.haisanngon.configurations"})
@PropertySource({"classpath:/application.properties",})
public class HaisanngonApplication {

	public static void main(String[] args) {
		SpringApplication.run(HaisanngonApplication.class, args);
	}

}
