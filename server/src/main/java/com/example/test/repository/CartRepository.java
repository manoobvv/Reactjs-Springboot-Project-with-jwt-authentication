package com.example.test.repository;

import org.bson.types.ObjectId;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

import com.example.test.model.ShoppingList;

public interface CartRepository extends MongoRepository<ShoppingList, String>, CartRepositoryCustom {

}