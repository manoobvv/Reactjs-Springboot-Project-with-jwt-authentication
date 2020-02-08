package com.example.test.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

import com.example.test.model.Products;
import com.example.test.model.ShoppingList;

public class CartRepositoryImpl implements CartRepositoryCustom {

    private final MongoOperations operations;

    @Autowired
    public CartRepositoryImpl(final MongoOperations operations) {
        this.operations = operations;
    }

    @Override
    public List<ShoppingList> findByProductId(String productId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("cartProductDetails").is(productId));
        List<ShoppingList> cartProducts = this.operations.find(query, ShoppingList.class);
        return cartProducts;
    }

    // @Override
    // public List<Products> findCartProducts(String productId) {
    // // TODO Auto-generated method stub
    // return this.pr;
    // }

}
