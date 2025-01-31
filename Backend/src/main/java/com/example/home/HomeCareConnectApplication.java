package com.example.home;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.example")
@EntityScan(basePackages = "com.example")
@SpringBootApplication
public class HomeCareConnectApplication {

	public static void main(String[] args) {
		SpringApplication.run(HomeCareConnectApplication.class, args);
		System.out.println("started");
	}

}
