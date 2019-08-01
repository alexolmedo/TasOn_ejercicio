package com.tason.prueba;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    private final UserRepository repository;

    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    // Agregate root
    @GetMapping("/users")
    List<User> all(){
        return repository.findAll();
    }

    @PostMapping("/users")
    User newUser(@RequestBody User newUser){
        return repository.save(newUser);
    }

    @PutMapping("/users/{id}")
    User replaceUser(@RequestBody User newUser, @PathVariable Long id){
        return repository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setRole(newUser.getRole());
                    return repository.save(user);
                })
                .orElseGet(()->{
                    newUser.setId(id);
                    return repository.save(newUser);
                });
    }

    @DeleteMapping("/user/{id}")
    void deleteUser(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
