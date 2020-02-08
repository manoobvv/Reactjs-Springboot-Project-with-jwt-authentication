package com.example.test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.test.model.Resorts;

public interface ResortRepository extends MongoRepository<Resorts, String> {

    // public Resorts findOneByName(String resortName);

    // public User findAll(String name);

}