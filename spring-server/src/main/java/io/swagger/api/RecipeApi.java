package io.swagger.api;

import io.swagger.model.Recipe;

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

@Api(value = "recipe", description = "the recipe API")
public interface RecipeApi {

    @ApiOperation(value = "Get all the recipes", notes = "", response = Recipe.class, responseContainer = "List", tags={  })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "OK", response = Recipe.class) })
    @RequestMapping(value = "/recipe",
        produces = { "application/json", "text/html" }, 
        consumes = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<List<Recipe>> recipeGet();

}
