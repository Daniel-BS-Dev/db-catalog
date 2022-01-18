package com.daniel.DBCatalog.dbcatalog.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.daniel.DBCatalog.dbcatalog.entities.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
	
	@Query("SELECT DISTINCT obj FROM Category obj "
			+ "WHERE (LOWER(obj.name) LIKE LOWER(CONCAT('%',:name,'%')))") 
	Page<Category> find(Pageable page, String name);

}
