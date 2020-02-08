package com.example.test.repository;

import java.util.List;

import com.example.test.model.Products;
import com.example.test.model.ShoppingList;

public interface ProductRepositoryCustom {

    List<Products> findCartProducts(String cartProductDetails);

}
