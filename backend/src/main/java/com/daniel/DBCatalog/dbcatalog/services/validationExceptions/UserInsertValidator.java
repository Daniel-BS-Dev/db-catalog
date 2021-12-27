package com.daniel.DBCatalog.dbcatalog.services.validationExceptions;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.daniel.DBCatalog.dbcatalog.dto.UserInsertDTO;
import com.daniel.DBCatalog.dbcatalog.entities.User;
import com.daniel.DBCatalog.dbcatalog.repositories.UserRepository;
import com.daniel.DBCatalog.dbcatalog.resources.exceptions.FieldMessage;

	public class UserInsertValidator implements ConstraintValidator<UserInsertValid, UserInsertDTO> {
		// UserInsertValid -> tipo da minha anotação, para funcionar eu tenho que colocar essa anotação na minha classe que vai receber a verificação
		// UsertInsertDTO  -> nome da clssae que vai receber essa anotação
		
		@Autowired 
		private UserRepository repository;
		
		@Override
		public void initialize(UserInsertValid ann) {
		}

		@Override
		public boolean isValid(UserInsertDTO dto, ConstraintValidatorContext context) {
			
			// lista que recebe os erros
			List<FieldMessage> list = new ArrayList<>();
			
			//FindByEmail -> metodo que procura o email no eu banco
			User user = repository.findByEmail(dto.getEmail());
			
			if(user != null) {
				list.add(new FieldMessage("Email", "Email ja existe"));
			}
			
			// adiciona o erro na minha lista do bean validation
			for (FieldMessage e : list) {
				context.disableDefaultConstraintViolation();
				context.buildConstraintViolationWithTemplate(e.getFieldMessage()).addPropertyNode(e.getFieldName())
						.addConstraintViolation();
			}
			return list.isEmpty();
	}
}