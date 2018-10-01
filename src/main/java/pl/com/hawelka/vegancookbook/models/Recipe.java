package pl.com.hawelka.vegancookbook.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "recipes")
public class Recipe {
    @Id
    String id;
    String name;
    String category; //TODO: change to List of categories
    Integer prepTime;
    String cookingTime; //TODO: change to Integer
    String description;
    String steps; //TODO: change to List of steps
    Integer rating; //TODO: implement an enum maybe? think about the solution for storing rating
    Integer servings;
    String tags; //TODO: change to list of tags
    String allergens; //TODO: change to List of allergens
    String photos; //TODO: change to List of links, figure out how to store pictures
    String ingredients;

    public Recipe() {

    }

    public Recipe(String name, String category, String cookingTime, String ingredients) {
        this.name = name;
        this.category = category;
        this.cookingTime = cookingTime;
        this.ingredients = ingredients;
    }

    public Recipe(String name, String category, Integer prepTime, String cookingTime, String description, String steps, Integer servings, String ingredients) {
        this.name = name;
        this.category = category;
        this.prepTime = prepTime;
        this.cookingTime = cookingTime;
        this.description = description;
        this.steps = steps;
        this.servings = servings;
        this.ingredients = ingredients;
    }

    public Recipe(String name, String category, Integer prepTime, String cookingTime,
                  String description, String steps, Integer rating, Integer servings,
                  String tags, String allergens, String photos, String ingredients) {
        this.name = name;
        this.category = category;
        this.prepTime = prepTime;
        this.cookingTime = cookingTime;
        this.description = description;
        this.steps = steps;
        this.rating = rating;
        this.servings = servings;
        this.tags = tags;
        this.allergens = allergens;
        this.photos = photos;
        this.ingredients = ingredients;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(String cookingTime) {
        this.cookingTime = cookingTime;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public Integer getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(Integer prepTime) {
        this.prepTime = prepTime;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSteps() {
        return steps;
    }

    public void setSteps(String steps) {
        this.steps = steps;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Integer getServings() {
        return servings;
    }

    public void setServings(Integer servings) {
        this.servings = servings;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getAllergens() {
        return allergens;
    }

    public void setAllergens(String allergens) {
        this.allergens = allergens;
    }

    public String getPhotos() {
        return photos;
    }

    public void setPhotos(String photos) {
        this.photos = photos;
    }
}
