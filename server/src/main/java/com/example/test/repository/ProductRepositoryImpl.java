package com.example.test.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

import com.example.test.model.Products;
import com.example.test.model.ShoppingList;

public class ProductRepositoryImpl implements ProductRepositoryCustom {

    private final MongoOperations operations;

    @Autowired
    public ProductRepositoryImpl(final MongoOperations operations) {
        this.operations = operations;
    }

    @Override
    public List<Products> findCartProducts(String cartProductDetails) {

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(cartProductDetails));
        List<Products> products = this.operations.find(query, Products.class);
        return products;
    }

}
