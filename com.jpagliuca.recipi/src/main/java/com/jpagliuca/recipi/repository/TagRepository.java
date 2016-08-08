package com.jpagliuca.recipi.repository;

import com.jpagliuca.recipi.model.Tag;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * JPA Tag repository
 */
@RepositoryRestResource(collectionResourceRel = "tag", path = "tag")
public interface TagRepository extends PagingAndSortingRepository<Tag, Long> {
}
