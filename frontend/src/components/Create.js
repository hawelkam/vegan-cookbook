import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Create extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            ingredients: '',
            category: '',
            cookingTime: '',
            prepTime: 0,
            description: '',
            steps: '',
            rating: 0,
            servings: 0,
            tags: '',
            allegrens: '',
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

        const { name, ingredients, category, cookingTime, prepTime } = this.state;

        axios.post('/recipes', { name, ingredients, category, cookingTime, prepTime })
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { name, ingredients, category, cookingTime, prepTime } = this.state;
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
                                <input type="text" class="form-control" name="prepTime" value={prepTime} onChange={this.onChange} placeholder="Prep Time" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Cooking Time:</label>
                                <input type="text" class="form-control" name="cookingTime" value={cookingTime} onChange={this.onChange} placeholder="Cooking Time" />
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
