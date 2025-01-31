package com.example.home.controller;





import com.example.entity.AdminRegistration;
import com.example.home.service.AdminRegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminRegistrationController {

    @Autowired
    private AdminRegistrationService service;

    @PostMapping("/register")// admin registration
    public ResponseEntity<AdminRegistration> registerAdmin(@RequestBody AdminRegistration admin) {
        try {
            AdminRegistration savedAdmin = service.saveAdmin(admin);
            return new ResponseEntity<>(savedAdmin, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/admin/{id}")   // getbyid admin
    public ResponseEntity<AdminRegistration> getAdminById(@PathVariable("id") int id) {
        Optional<AdminRegistration> admin = service.getAdminById(id);
        return admin.map(ResponseEntity::ok).orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/admin/{username}") //admin get by name
    public ResponseEntity<AdminRegistration> getAdminByUsername(@PathVariable("username") String username) {
        AdminRegistration admin = service.getAdminByUsername(username);
        return admin != null ? new ResponseEntity<>(admin, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")     //delete admin
    public ResponseEntity<HttpStatus> deleteAdmin(@PathVariable("id") int id) {
        try {
            service.deleteAdmin(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    
    // Update admin details
    @PutMapping("/updateregister/{userId}")
    public ResponseEntity<HttpStatus> updateUser(@RequestBody AdminRegistration userRef, @PathVariable("userId") Integer id) {
        try {
            service.updateUser(userRef, id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Admin login
    @PostMapping("/admin-login")
    public ResponseEntity<AdminRegistration> login(@RequestBody AdminRegistration userRef) {
        AdminRegistration admin = service.login(userRef.getUsername(), userRef.getPassword());
        if (admin != null) {
            return new ResponseEntity<>(admin, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }


//	@PutMapping("/updateregister/{userId}")   // ,update admin details 
//	public void updateUser(@RequestBody AdminRegistration userRef,@PathVariable("userId") Integer id) {
//		service.updateUser(userRef, id);
//	}
//	
//
//	@PostMapping("/admin-login")   // admin login 
//	public AdminRegistration login(@RequestBody AdminRegistration userRef) {
//		return (service.login(userRef.getUsername(), userRef.getPassword()));
//	}
	
}
