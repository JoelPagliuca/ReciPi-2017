package com.jpagliuca.recipi.model;

/**
 * A tag for a recipe
 * Created by joelp on 8/08/16.
 */
public class Tag {
    private final long id;
    private final String name;

    public Tag(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}
