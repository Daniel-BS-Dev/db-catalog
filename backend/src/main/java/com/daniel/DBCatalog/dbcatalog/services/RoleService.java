package com.daniel.DBCatalog.dbcatalog.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.DBCatalog.dbcatalog.dto.CategoryDTO;
import com.daniel.DBCatalog.dbcatalog.dto.RoleDTO;
import com.daniel.DBCatalog.dbcatalog.entities.Role;
import com.daniel.DBCatalog.dbcatalog.repositories.RoleRepository;

@Service
public class RoleService {

	@Autowired
	public RoleRepository repository;

	@Transactional(readOnly = true)
	public Page<RoleDTO> findAllPage(PageRequest page) {
		Page<Role> list = repository.findAll(page);
		return list.map(x -> new RoleDTO(x));
	}


}
