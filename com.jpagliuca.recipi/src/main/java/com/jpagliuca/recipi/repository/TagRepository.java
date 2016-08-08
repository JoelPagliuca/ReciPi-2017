package com.jpagliuca.recipi.repository;

import com.jpagliuca.recipi.model.Tag;

import org.springframework.data.repository.CrudRepository;

/**
 * JPA Tag repository
 */
public interface TagRepository extends CrudRepository<Tag, Long> {
}
