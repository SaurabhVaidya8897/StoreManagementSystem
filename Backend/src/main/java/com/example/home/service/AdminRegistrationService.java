package com.example.home.service;


import com.example.entity.AdminRegistration;
import com.example.repository.AdminRegistrationRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdminRegistrationService {

    @Autowired
    private AdminRegistrationRepo repository;

    public AdminRegistration saveAdmin(AdminRegistration admin) {
        return repository.save(admin);
    }

    public Optional<AdminRegistration> getAdminById(int id) {
        return repository.findById(id);
    }

    public AdminRegistration getAdminByUsername(String username) {
        return repository.findByUsername(username);
    }

    public void deleteAdmin(int id) {
        repository.deleteById(id);
    }


	public void updateUser(AdminRegistration newUser, Integer id) {
		AdminRegistration oldUser = null;

		Optional<AdminRegistration> opt = repository.findById(id);

		if (!opt.isEmpty()) {

			oldUser = opt.get();
			oldUser.setName(newUser.getName());
			
			
			oldUser.setMobileNo(newUser.getMobileNo());
			oldUser.setUsername(newUser.getUsername());
			repository.save(oldUser);
		}
	}

	public void updatePassword(String newPass, String oldPass, Integer id) throws Exception {

		AdminRegistration user = null;
		Optional<AdminRegistration> opt =repository.findById(id);
		if (!opt.isEmpty()) {

			user = opt.get();
			if (oldPass.equals(user.getPassword())) {
				user.setPassword(newPass);
				repository.save(user);
			}
			else {
				throw new Exception("wrong password");
			}
		}
	}
	
	
		public AdminRegistration login(String username, String password) {
	        AdminRegistration user = repository.findByUsername(username);
	        if (user != null && user.getPassword().equals(password)) {
	            return user;
	        }
	       return null;
		}
}

