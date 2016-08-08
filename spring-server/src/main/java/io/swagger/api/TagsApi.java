package io.swagger.api;

import io.swagger.model.Tag;

import io.swagger.annotations.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringCodegen", date = "2016-08-08T02:37:53.100Z")

@Api(value = "tags", description = "the tags API")
public interface TagsApi {

    @ApiOperation(value = "Get all the tags", notes = "", response = Tag.class, responseContainer = "List", tags={ "Tag", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = Tag.class) })
    @RequestMapping(value = "/tags",
        produces = { "application/json", "text/html" }, 
        consumes = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<List<Tag>> tagsGet();


    @ApiOperation(value = "Add a new tag", notes = "", response = Void.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = Void.class) })
    @RequestMapping(value = "/tags",
        produces = { "application/json", "text/html" }, 
        consumes = { "application/json" },
        method = RequestMethod.POST)
    ResponseEntity<Void> tagsPost(@ApiParam(value = "" ,required=true ) @RequestBody Tag tag);

}
