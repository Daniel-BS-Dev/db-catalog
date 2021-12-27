package com.daniel.DBCatalog.dbcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.daniel.DBCatalog.dbcatalog.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query("SELECT obj FROM User obj WHERE obj.email = :email")
	User findByEmail(String email);

}
