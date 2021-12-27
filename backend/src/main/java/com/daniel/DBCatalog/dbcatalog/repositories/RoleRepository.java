package com.daniel.DBCatalog.dbcatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.daniel.DBCatalog.dbcatalog.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
