package com.example.test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

import com.example.test.model.Products;

public interface ProductRepository extends MongoRepository<Products, String>, ProductRepositoryCustom {

}