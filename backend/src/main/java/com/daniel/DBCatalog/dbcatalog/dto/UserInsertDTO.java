package com.daniel.DBCatalog.dbcatalog.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.daniel.DBCatalog.dbcatalog.entities.Role;
import com.daniel.DBCatalog.dbcatalog.entities.User;

public class UserInsertDTO extends UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private String password;

	public UserInsertDTO() {
      super();
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	
}
