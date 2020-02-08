package com.example.test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.test.model.Restaurants;

public interface RestaurantRepository extends MongoRepository<Restaurants, String> {

    // public Restaurants findOneByName(String restaurantName);

}