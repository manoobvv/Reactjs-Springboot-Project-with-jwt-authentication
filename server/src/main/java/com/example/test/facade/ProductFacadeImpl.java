package com.example.test.facade;

import com.example.test.model.Products;
import com.example.test.service.ProductService;

import org.springframework.stereotype.Component;

@Component
public class ProductFacadeImpl implements ProductFacade {

    private final ProductService productService;

    public ProductFacadeImpl(final ProductService productService) {
        this.productService = productService;
    }

    // @Override
    // public Products createProduct(Products product) {
    // return this.productService.createProduct(product);
    // }

}