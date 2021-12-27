package com.daniel.DBCatalog.dbcatalog.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.DBCatalog.dbcatalog.dto.CategoryDTO;
import com.daniel.DBCatalog.dbcatalog.entities.Category;
import com.daniel.DBCatalog.dbcatalog.repositories.CategoryRepository;
import com.daniel.DBCatalog.dbcatalog.services.exceptions.ResourceNotFoundException;

@Service
public class CategoryService {

	@Autowired
	public CategoryRepository repository;

	@Transactional(readOnly = true)
	public Page<CategoryDTO> findAllPage(PageRequest page) {
		Page<Category> list = repository.findAll(page);
		return list.map(x -> new CategoryDTO(x));
	}

	@Transactional(readOnly = true)
	public CategoryDTO findById(Long id) {
		Optional<Category> obj = repository.findById(id);// essa exceção esta sendo personalizada na class  StandardError
		Category entity = obj.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));
		return new CategoryDTO(entity);
	}

	@Transactional
	public CategoryDTO insert(CategoryDTO dto) {
		Category entity = new Category();
		entity.setName(dto.getName());
		entity = repository.save(entity);
		return new CategoryDTO(entity);
	}
}
