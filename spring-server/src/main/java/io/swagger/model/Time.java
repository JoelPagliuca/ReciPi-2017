package io.swagger.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.SpringCodegen", date = "2016-08-08T02:37:53.100Z")

public class Time   {
  
  private BigDecimal prep = null;
  private BigDecimal cook = null;
  private BigDecimal other = null;

  /**
   **/
  public Time prep(BigDecimal prep) {
    this.prep = prep;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("prep")
  public BigDecimal getPrep() {
    return prep;
  }
  public void setPrep(BigDecimal prep) {
    this.prep = prep;
  }

  /**
   **/
  public Time cook(BigDecimal cook) {
    this.cook = cook;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("cook")
  public BigDecimal getCook() {
    return cook;
  }
  public void setCook(BigDecimal cook) {
    this.cook = cook;
  }

  /**
   **/
  public Time other(BigDecimal other) {
    this.other = other;
    return this;
  }

  
  @ApiModelProperty(value = "")
  @JsonProperty("other")
  public BigDecimal getOther() {
    return other;
  }
  public void setOther(BigDecimal other) {
    this.other = other;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Time time = (Time) o;
    return Objects.equals(prep, time.prep) &&
        Objects.equals(cook, time.cook) &&
        Objects.equals(other, time.other);
  }

  @Override
  public int hashCode() {
    return Objects.hash(prep, cook, other);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Time {\n");
    
    sb.append("    prep: ").append(toIndentedString(prep)).append("\n");
    sb.append("    cook: ").append(toIndentedString(cook)).append("\n");
    sb.append("    other: ").append(toIndentedString(other)).append("\n");
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

