package com.jpagliuca.recipi.service;

import com.jpagliuca.recipi.model.Tag;

import java.util.List;

/**
 * Gets the tags from the database
 * Created by joelp on 8/08/16.
 */
public interface TagService {
    List<Tag> getAll();
    Tag getById(long id);
}
