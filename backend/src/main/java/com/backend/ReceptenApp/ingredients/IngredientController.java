package com.backend.ReceptenApp.ingredients;

import com.backend.ReceptenApp.BadRequestException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/ingredients")
@CrossOrigin("http://localhost:5173")
public class IngredientController {

    private final IngredientRepository ingredientRepository;

    @GetMapping
    public Iterable<Ingredient> getAll() {
        return ingredientRepository.findAll();
    }

    @GetMapping("{id}")
    public Optional<Ingredient> getById(@PathVariable long id) {
        return ingredientRepository.findById(id);
    }

    @PostMapping
    public ResponseEntity<Ingredient> addIngredient(@RequestBody Ingredient ingredient, UriComponentsBuilder ucb) {
        if (ingredient.getId() != null) {
            throw new BadRequestException("The body of this POST-request should not contain an id");
        }

        ingredientRepository.save(ingredient);
        URI locationOfNewIngredient = ucb
                .path("{id}")
                .buildAndExpand(ingredient.getId())
                .toUri();
        return ResponseEntity.created(locationOfNewIngredient).body(ingredient);
    }

    /////
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id) {
        if (ingredientRepository.findById(id).isPresent()) {
            ingredientRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else return ResponseEntity.notFound().build();
    }
}
