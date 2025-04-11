package com.pricetra.email_server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@RestController
public class EmailServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(EmailServerApplication.class, args);
	}

	@GetMapping("/hello")
	public String hello() {
		return "Hello"
	}

}
