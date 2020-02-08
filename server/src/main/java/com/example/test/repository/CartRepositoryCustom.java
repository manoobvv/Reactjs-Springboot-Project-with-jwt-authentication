package com.example.test.repository;

import java.util.List;

import com.example.test.model.Products;
import com.example.test.model.ShoppingList;

public interface CartRepositoryCustom {

    List<ShoppingList> findByProductId(String productId);

    // List<Products> findCartProducts(String productId);

}
