package com.tason.prueba;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("No se pudo encontrar usuario " + id);
    }
}
