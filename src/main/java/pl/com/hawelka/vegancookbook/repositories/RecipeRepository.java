package pl.com.hawelka.vegancookbook.repositories;

import org.springframework.data.repository.CrudRepository;
import pl.com.hawelka.vegancookbook.models.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, String> {
    @Override
    void delete(Recipe deleted);
}
