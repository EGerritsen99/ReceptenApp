package com.backend.ReceptenApp;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;
    private String title;

    public Recipe (String title) {
        this.title = title;
    }

}
