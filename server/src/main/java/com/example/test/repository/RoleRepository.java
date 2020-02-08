package com.example.test.repository;

import com.example.test.model.Role;
import com.example.test.model.RoleName;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

/**
 * Created by rajeevkumarsingh on 02/08/17.
 */

public interface RoleRepository extends MongoRepository<Role, String> {
    // Role findByName(RoleName roleName);

    // Role findByRole(RoleName role);

    // Role findByRole(RoleName roleAdmin);
    Role findByRole(String role);
}