package com.example.test.service;

import java.io.IOException;
import java.util.List;
import com.example.test.model.Products;

import com.example.test.model.ShoppingList;

public interface CartService {

    Void setProductToCart(String productId) throws IOException;

    List<Products> getAllCartProducts();
}