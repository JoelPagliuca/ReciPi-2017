package com.jpagliuca.recipi.controller;

import com.jpagliuca.recipi.repository.TagRepository;
import com.jpagliuca.recipi.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.jpagliuca.recipi.model.Tag;

import java.util.List;

/**
 * Controller for Tags
 */
@RestController
public class TagController {

    @Autowired
    private TagService service;

    @Autowired
    private TagRepository repository;

    @RequestMapping(value = "/tags", method = RequestMethod.GET)
    public ResponseEntity<List<Tag>> tagsGet() {
        List<Tag> tags = (List<Tag>) repository.findAll();
        return new ResponseEntity<>(tags, HttpStatus.OK);
    }

    @RequestMapping(value = "/tags", method = RequestMethod.POST)
    public ResponseEntity<Void> tagsPost(@RequestBody Tag tag) {
        repository.save(tag);
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    @RequestMapping(value = "/tag/{id}", method = RequestMethod.GET)
    public ResponseEntity<Tag> tagIdGet(@PathVariable("id") long id) {
        Tag tag = repository.findOne(id);
        return new ResponseEntity<>(tag, HttpStatus.OK);
    }

    @RequestMapping(value = "/tag/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Tag> tagIdDelete(@PathVariable("id") long id) {
        Tag tag = repository.findOne(id);
        repository.delete(tag);
        return new ResponseEntity<>(tag, HttpStatus.OK);
    }
}
