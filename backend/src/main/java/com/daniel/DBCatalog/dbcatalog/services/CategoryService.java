package com.daniel.DBCatalog.dbcatalog.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.DBCatalog.dbcatalog.dto.CategoryDTO;
import com.daniel.DBCatalog.dbcatalog.entities.Category;
import com.daniel.DBCatalog.dbcatalog.repositories.CategoryRepository;
import com.daniel.DBCatalog.dbcatalog.services.exceptions.DatabaseException;
import com.daniel.DBCatalog.dbcatalog.services.exceptions.ResourceNotFoundException;

@Service
public class CategoryService {

	@Autowired
	public CategoryRepository repository;

	@Transactional(readOnly = true)
	public Page<CategoryDTO> findAllPage(PageRequest page, String name) {
		Page<Category> list = repository.find(page, name);
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

	@Transactional
	public CategoryDTO updated(Long id, CategoryDTO dto) {
		try {
			Category entity = repository.getById(id);
			entity.setName(dto.getName());
			entity = repository.save(entity);
			return new CategoryDTO(entity);
		} catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("id " + id + " does not exist");
		}
	}
	
	public void delete(Long id) {
		try {
		    repository.deleteById(id);
		}catch(EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("id not found "+id);
		}catch(DataIntegrityViolationException e) {
			throw new DatabaseException("Integrity violation");
		}
		
		
	}
}
