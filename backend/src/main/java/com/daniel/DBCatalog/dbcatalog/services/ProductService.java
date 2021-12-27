package com.daniel.DBCatalog.dbcatalog.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.daniel.DBCatalog.dbcatalog.dto.ProductDTO;
import com.daniel.DBCatalog.dbcatalog.entities.Product;
import com.daniel.DBCatalog.dbcatalog.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository;
	
    @Transactional(readOnly= true)
	public Page<ProductDTO> findAllPage(PageRequest pageRequest) {
        Page<Product> list = repository.findAll(pageRequest);
		return list.map(x -> new ProductDTO(x));
	}


}
