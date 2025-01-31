

package com.example.repository;

import com.example.entity.AdminRegistration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRegistrationRepo extends JpaRepository<AdminRegistration, Integer> {
    // Custom query methods can be defined here if needed
    AdminRegistration findByUsername(String username);
}