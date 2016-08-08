package io.swagger.api;

import java.math.BigDecimal;
import io.swagger.model.Tag;

import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringCodegen", date = "2016-08-08T02:37:53.100Z")

@Controller
public class TagApiController implements TagApi {

    public ResponseEntity<Void> tagIdDelete(@ApiParam(value = "the id for the tag",required=true ) @PathVariable("id") BigDecimal id) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

    public ResponseEntity<Tag> tagIdGet(@ApiParam(value = "the id for the tag",required=true ) @PathVariable("id") BigDecimal id) {
        // do some magic!
        return new ResponseEntity<Tag>(HttpStatus.OK);
    }

    public ResponseEntity<Void> tagIdPut(@ApiParam(value = "the id for the tag",required=true ) @PathVariable("id") BigDecimal id,
        @ApiParam(value = "" ,required=true ) @RequestBody Tag tag) {
        // do some magic!
        return new ResponseEntity<Void>(HttpStatus.OK);
    }

}
