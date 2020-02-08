package com.example.test.service;

import java.io.IOException;

import com.example.test.model.User;

public interface UserService {
    Void createUser(User user) throws IOException;
}
