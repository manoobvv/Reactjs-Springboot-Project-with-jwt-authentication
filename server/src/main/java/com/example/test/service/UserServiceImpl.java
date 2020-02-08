package com.example.test.service;

import java.io.IOException;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;

import com.example.test.model.User;
import com.example.test.model.Role;
import com.example.test.model.RoleName;

import com.example.test.Constants;

import com.example.test.repository.UserRepository;
import com.example.test.repository.RoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    // @Autowired
    // private BCryptPasswordEncoder bCryptPasswordEncoder;

    private final UserRepository userRepository;

    private final RoleRepository roleRepository;

    public UserServiceImpl(final UserRepository userRepository, final RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public Void createUser(User user) throws IOException {
        User addUser = new User();
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        addUser.setEmail(user.getEmail());
        addUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        addUser.setUserName(user.getUserName());
        addUser.setFullName(user.getFullName());
        Role userRole = this.roleRepository.findByRole(Constants.USER);
        addUser.setRoles(new HashSet<>(Arrays.asList(userRole)));
        this.userRepository.save(addUser);
        return null;
        // TODO Auto-generated method stub

    }
}