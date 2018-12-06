import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StarRatings from "react-star-ratings";

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipe: {}
        };
    }

    componentDidMount() {
        axios.get('/recipes/'+this.props.match.params.id)
            .then(res => {
                this.setState({ recipe: res.data });
                console.log(this.state.recipe);
            });
    }

    delete(id) {
        console.log(id);
        axios.delete('/recipes/'+id)
            .then((result) => {
                this.props.history.push("/")
            });
    }

    render() {
        const { name, ingredients, category, cookingTime } = this.state;
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Recipe Details
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Recipes List</Link></h4>
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.recipe.name}</dd>
                            <dt>Ingredients:</dt>
                            <dd>{this.state.recipe.ingredients}</dd>
                            <dt>Category:</dt>
                            <dd>{this.state.recipe.category}</dd>
                            <dt>Prep Time:</dt>
                            <dd>{this.state.recipe.prepTime}</dd>
                            <dt>Cooking Time:</dt>
                            <dd>{this.state.recipe.cookingTime}</dd>
                            <dt>Description:</dt>
                            <dd>{this.state.recipe.description}</dd>
                            <dt>Steps:</dt>
                            <dd>{this.state.recipe.steps}</dd>
                            <dt>Rating:</dt>
                            <dd><StarRatings
                                    rating={this.state.recipe.rating}
                                    starRatedColor="gold"
                                    numberOfStars={10}
                                    name='rating'
                                /></dd>
                            <dt>Servings:</dt>
                            <dd>{this.state.recipe.servings}</dd>
                            <dt>Tags:</dt>
                            <dd>{this.state.recipe.tags}</dd>
                            <dt>Allergens:</dt>
                            <dd>{this.state.recipe.allergens}</dd>
                            <dt>Photos:</dt>
                            <dd>{this.state.recipe.photos}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.recipe.id}`} className="btn btn-success">Edit</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.recipe.id)} className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
