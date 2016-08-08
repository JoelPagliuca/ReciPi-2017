package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Step;
import io.swagger.model.Tag;
import io.swagger.model.Time;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringCodegen", date = "2016-08-08T02:37:53.100Z")

public class Recipe   {
  
  private BigDecimal id = null;
  private String name = null;
  private String description = null;
  private String image = null;
  private List<Tag> tags = new ArrayList<Tag>();


  public enum DifficultyEnum {
    BREEZY("breezy"),
    TRICKY("tricky"),
    EXPERT("expert");

    private String value;

    DifficultyEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return value;
    }
  }

  private DifficultyEnum difficulty = null;
  private BigDecimal serves = null;
  private Time time = null;
  private List<String> notes = new ArrayList<String>();
  private List<Step> steps = new ArrayList<Step>();

  /**
   **/
  public Recipe id(BigDecimal id) {
    this.id = id;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("id")
  public BigDecimal getId() {
    return id;
  }
  public void setId(BigDecimal id) {
    this.id = id;
  }

  /**
   **/
  public Recipe name(String name) {
    this.name = name;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("name")
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }

  /**
   **/
  public Recipe description(String description) {
    this.description = description;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("description")
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }

  /**
   * location of image file
   **/
  public Recipe image(String image) {
    this.image = image;
    return this;
  }

  
  @ApiModelProperty(value = "location of image file")
  @JsonProperty("image")
  public String getImage() {
    return image;
  }
  public void setImage(String image) {
    this.image = image;
  }

  /**
   **/
  public Recipe tags(List<Tag> tags) {
    this.tags = tags;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("tags")
  public List<Tag> getTags() {
    return tags;
  }
  public void setTags(List<Tag> tags) {
    this.tags = tags;
  }

  /**
   **/
  public Recipe difficulty(DifficultyEnum difficulty) {
    this.difficulty = difficulty;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("difficulty")
  public DifficultyEnum getDifficulty() {
    return difficulty;
  }
  public void setDifficulty(DifficultyEnum difficulty) {
    this.difficulty = difficulty;
  }

  /**
   **/
  public Recipe serves(BigDecimal serves) {
    this.serves = serves;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("serves")
  public BigDecimal getServes() {
    return serves;
  }
  public void setServes(BigDecimal serves) {
    this.serves = serves;
  }

  /**
   **/
  public Recipe time(Time time) {
    this.time = time;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("time")
  public Time getTime() {
    return time;
  }
  public void setTime(Time time) {
    this.time = time;
  }

  /**
   **/
  public Recipe notes(List<String> notes) {
    this.notes = notes;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("notes")
  public List<String> getNotes() {
    return notes;
  }
  public void setNotes(List<String> notes) {
    this.notes = notes;
  }

  /**
   **/
  public Recipe steps(List<Step> steps) {
    this.steps = steps;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("steps")
  public List<Step> getSteps() {
    return steps;
  }
  public void setSteps(List<Step> steps) {
    this.steps = steps;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Recipe recipe = (Recipe) o;
    return Objects.equals(id, recipe.id) &&
        Objects.equals(name, recipe.name) &&
        Objects.equals(description, recipe.description) &&
        Objects.equals(image, recipe.image) &&
        Objects.equals(tags, recipe.tags) &&
        Objects.equals(difficulty, recipe.difficulty) &&
        Objects.equals(serves, recipe.serves) &&
        Objects.equals(time, recipe.time) &&
        Objects.equals(notes, recipe.notes) &&
        Objects.equals(steps, recipe.steps);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, image, tags, difficulty, serves, time, notes, steps);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Recipe {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    difficulty: ").append(toIndentedString(difficulty)).append("\n");
    sb.append("    serves: ").append(toIndentedString(serves)).append("\n");
    sb.append("    time: ").append(toIndentedString(time)).append("\n");
    sb.append("    notes: ").append(toIndentedString(notes)).append("\n");
    sb.append("    steps: ").append(toIndentedString(steps)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

