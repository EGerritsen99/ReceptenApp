package com.backend.ReceptenApp.ingredients;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Getter
public class Ingredient {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    public Ingredient (String name) {
        this.name = name;
    }

}
