import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            ingredients: '',
            category: '',
            cookingTime: 0,
            prepTime: 0,
            description: '',
            steps: '',
            rating: 0,
            servings: 0,
            tags: '',
            allergens: '',
            photos: ''
        };
    }

    onChange = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, ingredients, category, cookingTime, prepTime, description, steps, rating, servings, tags, allergens, photos } = this.state;

        axios.post('/recipes', { name, ingredients, category, cookingTime, prepTime, description, steps, rating, servings, tags, allergens, photos })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    changeRating = ( newRating, name ) => {
        const state = this.state;
        state[name] = newRating;
        this.setState(state);
    }

    render() {
        const { name, ingredients, category, cookingTime, prepTime, description, steps, rating, servings, tags, allergens, photos } = this.state;
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            ADD NEW RECIPE
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Recipes List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="isbn">Name:</label>
                                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <label for="title">Ingredients:</label>
                                <input type="text" class="form-control" name="ingredients" value={ingredients} onChange={this.onChange} placeholder="Ingredients" />
                            </div>
                            <div class="form-group">
                                <label for="author">Category:</label>
                                <input type="text" class="form-control" name="category" value={category} onChange={this.onChange} placeholder="Category" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Prep Time:</label>
                                <input type="number" class="form-control" name="prepTime" value={prepTime} onChange={this.onChange} placeholder="Prep Time" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Cooking Time:</label>
                                <input type="number" class="form-control" name="cookingTime" value={cookingTime} onChange={this.onChange} placeholder="Cooking Time" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Description:</label>
                                <input type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Steps:</label>
                                <input type="text" class="form-control" name="steps" value={steps} onChange={this.onChange} placeholder="Steps" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Rating:</label><br />
                                <StarRatings
                                    rating={rating}
                                    starRatedColor="gold"
                                    changeRating={this.changeRating}
                                    numberOfStars={10}
                                    name='rating'
                                />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Servings:</label>
                                <input type="text" class="form-control" name="servings" value={servings} onChange={this.onChange} placeholder="Servings" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Tags:</label>
                                <input type="text" class="form-control" name="tags" value={tags} onChange={this.onChange} placeholder="Tags" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Allergens:</label>
                                <input type="text" class="form-control" name="allergens" value={allergens} onChange={this.onChange} placeholder="Allergens" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Photos:</label>
                                <input type="text" class="form-control" name="photos" value={photos} onChange={this.onChange} placeholder="Photos" />
                            </div>
                            <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Create;
