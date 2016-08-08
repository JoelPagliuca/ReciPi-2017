package com.jpagliuca.recipi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

import com.jpagliuca.recipi.model.Tag;

/**
 * Controller for Tags
 */
@RestController
public class TagController {

    @RequestMapping(value = "/tag", method = RequestMethod.GET)
    public Tag tagIdGet() {
        return new Tag(1234, "a tag");
    }

}
