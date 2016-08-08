package com.jpagliuca.recipi.controller;

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

    @RequestMapping(value = "/tag/{id}", method = RequestMethod.GET)
    public ResponseEntity<Tag> tagIdGet(@PathVariable("id") long id) {
        Tag tag = service.getById(id);
        return new ResponseEntity<>(tag, HttpStatus.OK);
    }

    @RequestMapping(value = "/tags", method = RequestMethod.GET)
    public ResponseEntity<List<Tag>> tagsGet() {
        return new ResponseEntity<>(service.getAll(), HttpStatus.OK);
    }

}
