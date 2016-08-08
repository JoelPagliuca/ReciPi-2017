package com.jpagliuca.recipi.repository;

import com.jpagliuca.recipi.model.Ingredient;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Ingredient repository
 */
@RepositoryRestResource(collectionResourceRel = "ingredient", path = "ingredient")
public interface IngredientRepository extends PagingAndSortingRepository<Ingredient, Long> {
}
