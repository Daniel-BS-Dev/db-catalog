package com.daniel.DBCatalog.dbcatalog.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.daniel.DBCatalog.dbcatalog.entities.Category;

public class CategoryDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	
	@Size(min=2, max=60, message="Deve ter entre 2 e 60 caracteres")
	@NotBlank(message= "campo obrigatorio")
	private String name;
	
	public CategoryDTO() {
		
	}
	
	public CategoryDTO(Long id, String name) {
		this.id = id;
		this.name = name;
	}
	
	public CategoryDTO(Category entity) {
		id = entity.getId();
		name = entity.getName();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
