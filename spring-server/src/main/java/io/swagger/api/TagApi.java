package io.swagger.api;

import java.math.BigDecimal;
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

@Api(value = "tag", description = "the tag API")
public interface TagApi {

    @ApiOperation(value = "Delete a tag", notes = "", response = Void.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = Void.class) })
    @RequestMapping(value = "/tag/{id}",
        produces = { "application/json", "text/html" }, 
        consumes = { "application/json" },
        method = RequestMethod.DELETE)
    ResponseEntity<Void> tagIdDelete(@ApiParam(value = "the id for the tag",required=true ) @PathVariable("id") BigDecimal id);


    @ApiOperation(value = "Get a tag", notes = "", response = Tag.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = Tag.class) })
    @RequestMapping(value = "/tag/{id}",
        produces = { "application/json", "text/html" }, 
        consumes = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<Tag> tagIdGet(@ApiParam(value = "the id for the tag",required=true ) @PathVariable("id") BigDecimal id);


    @ApiOperation(value = "Update a tag", notes = "", response = Void.class, tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = Void.class) })
    @RequestMapping(value = "/tag/{id}",
        produces = { "application/json", "text/html" }, 
        consumes = { "application/json" },
        method = RequestMethod.PUT)
    ResponseEntity<Void> tagIdPut(@ApiParam(value = "the id for the tag",required=true ) @PathVariable("id") BigDecimal id,@ApiParam(value = "" ,required=true ) @RequestBody Tag tag);

}
