package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.model.Ingredient;
import java.math.BigDecimal;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringCodegen", date = "2016-08-08T02:37:53.100Z")

public class Step   {
  
  private BigDecimal number = null;
  private Ingredient ingredient = null;
  private String description = null;
  private String unit = null;
  private BigDecimal amount = null;

  /**
   * step number within recipe
   **/
  public Step number(BigDecimal number) {
    this.number = number;
    return this;
  }

  
  @ApiModelProperty(value = "step number within recipe")
  @JsonProperty("number")
  public BigDecimal getNumber() {
    return number;
  }
  public void setNumber(BigDecimal number) {
    this.number = number;
  }

  /**
   **/
  public Step ingredient(Ingredient ingredient) {
    this.ingredient = ingredient;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("ingredient")
  public Ingredient getIngredient() {
    return ingredient;
  }
  public void setIngredient(Ingredient ingredient) {
    this.ingredient = ingredient;
  }

  /**
   **/
  public Step description(String description) {
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
   **/
  public Step unit(String unit) {
    this.unit = unit;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("unit")
  public String getUnit() {
    return unit;
  }
  public void setUnit(String unit) {
    this.unit = unit;
  }

  /**
   **/
  public Step amount(BigDecimal amount) {
    this.amount = amount;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("amount")
  public BigDecimal getAmount() {
    return amount;
  }
  public void setAmount(BigDecimal amount) {
    this.amount = amount;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Step step = (Step) o;
    return Objects.equals(number, step.number) &&
        Objects.equals(ingredient, step.ingredient) &&
        Objects.equals(description, step.description) &&
        Objects.equals(unit, step.unit) &&
        Objects.equals(amount, step.amount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(number, ingredient, description, unit, amount);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Step {\n");
    
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
    sb.append("    ingredient: ").append(toIndentedString(ingredient)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    unit: ").append(toIndentedString(unit)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
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

