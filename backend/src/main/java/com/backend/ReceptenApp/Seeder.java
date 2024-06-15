package com.backend.ReceptenApp;

import com.backend.ReceptenApp.ingredients.Ingredient;
import com.backend.ReceptenApp.ingredients.IngredientRepository;
import com.backend.ReceptenApp.recipes.Recipe;
import com.backend.ReceptenApp.recipes.RecipeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {

    private final RecipeRepository recipeRepository;
    private final IngredientRepository ingredientRepository;

    @Override
    public void run(String... args) {

        if (recipeRepository.count() == 0) {
            var recipe1 = new Recipe("Risotto");
            var recipe2 = new Recipe("Lasagna");
            recipeRepository.saveAll(List.of(recipe1, recipe2));
        }

        if (ingredientRepository.count() == 0) {
            var ingredient1 = new Ingredient("Mushrooms");
            var ingredient2 = new Ingredient("Tomatoes");
            ingredientRepository.saveAll(List.of(ingredient1, ingredient2));
        }

    }

}
