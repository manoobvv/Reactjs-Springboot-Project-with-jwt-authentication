// package com.example.test.config;

// import org.springframework.context.annotation.Configuration;
// import org.springframework.web.servlet.config.annotation.CorsRegistry;
// import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// /**
// * Created by rajeevkumarsingh on 02/08/17.
// */

// @Configuration
// public class WebMvcConfig implements WebMvcConfigurer {

// private final long MAX_AGE_SECS = 3600;

// @Override
// public void addCorsMappings(CorsRegistry registry) {
// registry.addMapping("/**").allowedOrigins("http://localhost:3000")
// .allowedMethods("HEAD", "OPTIONS", "GET", "POST", "PUT", "PATCH",
// "DELETE").maxAge(MAX_AGE_SECS);
// }
// }

/// // import org.springframework.context.annotation.Bean;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.core.annotation.Order;
// // import
// //
// org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
// // import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// //
// // import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// // @Configuration
// // @Order(1)
// // public class WebMvcConfig extends WebSecurityConfigurerAdapter {

// // @Bean
// // public BCryptPasswordEncoder passwordEncoder() {
// // BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
// // return bCryptPasswordEncoder;
// // }

// // // @Bean
// // // public WebMvcConfigurer corsConfigurer() {
// // // return new WebMvcConfigurer() {
// // // @Override
// // // public void addCorsMappings(CorsRegistry registry) {
// // // registry.addMapping("/**").allowedOrigins("http://localhost:3000");
// // // }
// // // };
// // // }

// // // @Override
// // // public void addCorsMappings(CorsRegistry registry) {
// // // registry.addMapping("/**");
// // // }
// // }