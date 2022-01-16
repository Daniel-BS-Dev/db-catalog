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

import com.daniel.DBCatalog.dbcatalog.dto.RoleDTO;
import com.daniel.DBCatalog.dbcatalog.services.RoleService;

@RestController
@RequestMapping(value = "/roles")
public class RoleResource {

	@Autowired
	public RoleService service;

	@GetMapping
	public ResponseEntity<Page<RoleDTO>> findAll(@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linePerPages", defaultValue = "12") Integer linePerPages,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction,
			@RequestParam(value = "orderBy", defaultValue = "authority") String orderBy

	) {

		PageRequest pageRequest = PageRequest.of(page, linePerPages, Direction.valueOf(direction), orderBy);
		Page<RoleDTO> list = service.findAllPage(pageRequest);

		return ResponseEntity.ok().body(list);
	}

}
