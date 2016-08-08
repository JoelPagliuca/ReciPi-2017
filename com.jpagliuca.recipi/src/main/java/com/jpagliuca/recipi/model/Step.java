package com.jpagliuca.recipi.model;

import javax.persistence.Entity;

/**
 * A recipe step
 */
@Entity
public class Step {

    private int number;
    private Ingredient ingredient;
    private String description;
    private String unit;
    private Double amount;

    protected Step() {}

    public Step(int number, Ingredient ingredient, String description, String unit, Double amount) {
        this.number = number;
        this.ingredient = ingredient;
        this.description = description;
        this.unit = unit;
        this.amount = amount;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public Ingredient getIngredient() {
        return ingredient;
    }

    public void setIngredient(Ingredient ingredient) {
        this.ingredient = ingredient;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }
}
