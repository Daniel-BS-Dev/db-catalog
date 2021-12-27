package com.daniel.DBCatalog.dbcatalog.services.validationExceptions;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import javax.validation.Constraint;
import javax.validation.Payload;

@Constraint(validatedBy = UserUpdateValidator.class)//UserInsertValidator -> é a minha classe com toda a funcionalidade
@Target({ ElementType.TYPE })
@Retention(RetentionPolicy.RUNTIME)

//classe que servirá como anotação pra verificar email
public @interface UserUpdateValid {
	String message() default "Validation error";

	Class<?>[] groups() default {};

	Class<? extends Payload>[] payload() default {};
}
