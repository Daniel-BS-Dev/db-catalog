package com.daniel.DBCatalog.dbcatalog.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.daniel.DBCatalog.dbcatalog.dto.ProductDTO;
import com.daniel.DBCatalog.dbcatalog.services.ProductService;

@RestController
@RequestMapping(value = "/products")
public class ProductResource {

	@Autowired
	private ProductService service;
	
	@GetMapping
	public ResponseEntity<Page<ProductDTO>> findAll(
			@RequestParam(value="page", defaultValue="0") Integer page,
			@RequestParam(value="linePerPage", defaultValue="12") Integer linePerPage,
			@RequestParam(value="direction", defaultValue="ASC") String direction,
			@RequestParam(value="orderBy", defaultValue="name") String orderBy
			){
		
		PageRequest pageRequest = PageRequest.of(page, linePerPage, Direction.valueOf(direction), orderBy);
		
		Page<ProductDTO> list = service.findAllPage(pageRequest);
	
		return ResponseEntity.ok().body(list);
	}
}