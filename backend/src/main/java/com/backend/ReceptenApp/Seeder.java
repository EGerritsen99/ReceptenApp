package com.backend.ReceptenApp;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {

    private final RecipeRepository recipeRepository;

    @Override
    public void run(String... args) {

        if(recipeRepository.count() == 0) {
            var recipe1 = new Recipe("Risotto");
            var recipe2 = new Recipe("Lasagna");
            recipeRepository.saveAll(List.of(recipe1, recipe2));
        }

    }

}
