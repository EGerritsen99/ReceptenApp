package com.backend.ReceptenApp;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@RestController
@RequiredArgsConstructor
@RequestMapping("/recipes")
@CrossOrigin("http://localhost:5173")
public class RecipeController {

    private final RecipeRepository recipeRepository;

//    @GetMapping
//    public String helloRecipes() {
//        return "Hello, recipes!";
//    }

    @GetMapping
    public Iterable<Recipe> getAll(Pageable pageable) throws InterruptedException {
        return recipeRepository.findAll(pageable);
    }

    @GetMapping("{id}")
    public Optional<Recipe> getById(@PathVariable long id) {
        return recipeRepository.findById(id);
    }


    @PostMapping
    public ResponseEntity<Recipe> add(@RequestBody Recipe recipe, UriComponentsBuilder ucb) {
        if(recipe.getId() != null) {
            throw new BadRequestException("The body of this POST-request should not contain an id");
        }

        recipeRepository.save(recipe);
        URI locationOfNewRecipe = ucb
                .path("{id}")
                .buildAndExpand(recipe.getId())
                .toUri();
        return ResponseEntity.created(locationOfNewRecipe).body(recipe);
    }

}
