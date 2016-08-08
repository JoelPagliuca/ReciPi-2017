package io.swagger.api;

import io.swagger.model.Recipe;

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
public class RecipeApiController implements RecipeApi {

    public ResponseEntity<List<Recipe>> recipeGet() {
        // do some magic!
        return new ResponseEntity<List<Recipe>>(HttpStatus.OK);
    }

}
