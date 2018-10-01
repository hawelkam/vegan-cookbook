package pl.com.hawelka.vegancookbook.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import pl.com.hawelka.vegancookbook.models.Recipe;
import pl.com.hawelka.vegancookbook.repositories.RecipeRepository;

@RestController
public class RecipeController {
    @Autowired
    RecipeRepository recipeRepository;

    @RequestMapping(method = RequestMethod.GET, value = "/recipes")
    public Iterable<Recipe> recipe() {
        return recipeRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST, value = "/recipes")
    public Recipe save(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/recipes/{id}")
    public Optional<Recipe> show(@PathVariable String id) {
        return recipeRepository.findById(id);
    }

    @RequestMapping(method = RequestMethod.PUT, value = "/recipes/{id}")
    public Recipe update(@PathVariable String id, @RequestBody Recipe recipe) {
        Optional<Recipe> optRecipe = recipeRepository.findById(id);
        Recipe r = optRecipe.get();
        if(recipe.getName() != null) r.setName(recipe.getName());
        if(recipe.getCategory() != null) r.setCategory(recipe.getCategory());
        if(recipe.getPhotos() != null) r.setPhotos(recipe.getPhotos());
        if(recipe.getPrepTime() != null) r.setPrepTime(recipe.getPrepTime());
        if(recipe.getCookingTime() != null) r.setCookingTime(recipe.getCookingTime());
        if(recipe.getIngredients() != null) r.setIngredients(recipe.getIngredients());
        if(recipe.getAllergens() != null) r.setAllergens(recipe.getAllergens());
        if(recipe.getDescription() != null) r.setDescription(recipe.getDescription());
        if(recipe.getSteps() != null) r.setSteps(recipe.getSteps());
        if(recipe.getRating() != null) r.setRating(recipe.getRating());
        if(recipe.getServings() != null) r.setServings(recipe.getServings());
        if(recipe.getTags() != null) r.setTags(recipe.getTags());
        recipeRepository.save(r);
        return r;
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/recipes/{id}")
    public String delete(@PathVariable String id) {
        Optional<Recipe> optRecipe = recipeRepository.findById(id);
        Recipe recipe = optRecipe.get();
        recipeRepository.delete(recipe);
        return "";
    }
}
