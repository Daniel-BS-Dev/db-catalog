package com.daniel.DBCatalog.dbcatalog.services.validationExceptions;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerMapping;

import com.daniel.DBCatalog.dbcatalog.dto.UserUpdateDTO;
import com.daniel.DBCatalog.dbcatalog.entities.User;
import com.daniel.DBCatalog.dbcatalog.repositories.UserRepository;
import com.daniel.DBCatalog.dbcatalog.resources.exceptions.FieldMessage;

	public class UserUpdateValidator implements ConstraintValidator<UserUpdateValid, UserUpdateDTO> {
		// UserInsertValid -> tipo da minha anotação, para funcionar eu tenho que colocar essa anotação na minha classe que vai receber a verificação
		// UsertInsertDTO  -> nome da clssae que vai receber essa anotação
		
		@Autowired 
		private HttpServletRequest request;
		
		@Autowired 
		private UserRepository repository;
		
		@Override
		public void initialize(UserUpdateValid ann) {
		}

		@Override
		public boolean isValid(UserUpdateDTO dto, ConstraintValidatorContext context) {
			
			// usei essa anotação pra tira o warning
			@SuppressWarnings("unchecked")
			//pegar as informações da uri
			var uriVars = (Map<String,String>)request.getAttribute(HandlerMapping.URI_TEMPLATE_VARIABLES_ATTRIBUTE);
			//pegando o id passado na minha uri
			long userId = Long.parseLong(uriVars.get("id"));
			
			List<FieldMessage> list = new ArrayList<>();
			
			User user = repository.findByEmail(dto.getEmail());
			
			if(user != null && userId != user.getId()) {
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