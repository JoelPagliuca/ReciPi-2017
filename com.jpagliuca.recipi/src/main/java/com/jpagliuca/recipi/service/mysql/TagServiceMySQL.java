package com.jpagliuca.recipi.service.mysql;

import com.jpagliuca.recipi.model.Tag;
import com.jpagliuca.recipi.service.TagService;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TagServiceMySQL implements TagService {

    @Override
    public List<Tag> getAll() {
        ArrayList<Tag> list = new ArrayList<Tag>();
        list.add(new Tag(1234, "Tag1234"));
        list.add(new Tag(4321, "Tag4321"));
        return list;
    }

    @Override
    public Tag getById(long id) {
        return new Tag(id, "TEST TAG");
    }
}
