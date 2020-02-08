package com.example.test.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.example.test.model.Products;

public interface ProductService {

    Void createProductForMap(Products products) throws IOException;

    List<Products> getAllProducts();

    Products getProductById(String productId);

}