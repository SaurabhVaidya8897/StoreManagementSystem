package com.example.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(name = "admin_details", uniqueConstraints = @UniqueConstraint(columnNames = { "username" }))
public class AdminRegistration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminId;
	private String Name;
	private String mobileNo;
	private String username;
	private String password;

 

	public AdminRegistration() {
		// TODO Auto-generated constructor stub
	}
	

	public AdminRegistration(int managerId, String name,String mobileNo, String username, String password) {
	super();
	this.adminId = managerId;
	this.Name = name;
	
	this.mobileNo = mobileNo;
	this.username = username;
	this.password = password;
}


	public int getManagerId() {
		return adminId;
	}

	public void setManagerId(int managerId) {
		this.adminId = managerId;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		this.Name = name;
	}


	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}


	@Override
	public String toString() {
		return "ManagerRegistration [managerId=" + adminId + ", Name=" + Name + ", mobileNo="
				+ mobileNo + ", username=" + username + ", password=" + password + "]";
	}



}
