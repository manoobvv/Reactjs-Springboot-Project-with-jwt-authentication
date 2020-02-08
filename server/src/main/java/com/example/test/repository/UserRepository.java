package com.example.test.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.test.model.User;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    // public User findOneByName(String name);

    public Optional<User> findById(String userId);

    // Optional<User> findByEmail(String email);

    Optional<User> findByUserNameOrEmail(String firstName, String email);

    // List<User> findByIdIn(List<Long> userIds);

    // Optional<User> findByUsername(String username);

    // Boolean existsByUsername(String username);

    // Boolean existsByEmail(String email);

    // public User findAll(String name);

}