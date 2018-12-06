import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import StarRatings from "react-star-ratings";

class Edit extends Component {
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

    onChange = (e) => {
        const state = this.state.recipe;
        state[e.target.name] = e.target.value;
        this.setState({recipe: state});
    }

    changeRating = ( newRating, name ) => {
        const state = this.state;
        state[name] = newRating;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { name, ingredients, category, cookingTime } = this.state.recipe;

        axios.put('/recipes/'+this.props.match.params.id, { name, ingredients, category, cookingTime })
            .then((result) => {
                this.props.history.push("/show/"+this.props.match.params.id)
            });
    }

    render() {
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            EDIT RECIPE
                        </h3>
                    </div>
                    <div className="panel-body">
                        <h4><Link to={`/show/${this.state.recipe.id}`}><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span>Recipes List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="isbn">Name:</label>
                                <input type="text" className="form-control" name="name" value={this.state.recipe.name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Ingredients:</label>
                                <input type="text" className="form-control" name="ingredients" value={this.state.recipe.ingredients} onChange={this.onChange} placeholder="Ingredients" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Category:</label>
                                <input type="text" className="form-control" name="category" value={this.state.recipe.category} onChange={this.onChange} placeholder="Category" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Prep Time:</label>
                                <input type="text" className="form-control" name="prepTime" value={this.state.recipe.prepTime} onChange={this.onChange} placeholder="Prep Time" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Cooking Time:</label>
                                <input type="text" className="form-control" name="cookingTime" value={this.state.recipe.cookingTime} onChange={this.onChange} placeholder="Cooking Time" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Description:</label>
                                <input type="text" className="form-control" name="description" value={this.state.recipe.description} onChange={this.onChange} placeholder="Description"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Steps:</label>
                                <input type="text" className="form-control" name="steps" value={this.state.recipe.steps}
                                       onChange={this.onChange} placeholder="Steps"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Rating:</label><br/>
                                <StarRatings
                                    rating={this.state.recipe.rating}
                                    starRatedColor="gold"
                                    changeRating={this.changeRating}
                                    numberOfStars={10}
                                    name='rating'
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Servings:</label>
                                <input type="text" className="form-control" name="servings" value={this.state.recipe.servings}
                                       onChange={this.onChange} placeholder="Servings"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Tags:</label>
                                <input type="text" className="form-control" name="tags" value={this.state.recipe.tags}
                                       onChange={this.onChange} placeholder="Tags"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Allergens:</label>
                                <input type="text" className="form-control" name="allergens" value={this.state.recipe.allergens}
                                       onChange={this.onChange} placeholder="Allergens"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="published_date">Photos:</label>
                                <input type="text" className="form-control" name="photos" value={this.state.recipe.photos}
                                       onChange={this.onChange} placeholder="Photos"/>
                            </div>
                            <button type="submit" className="btn btn-default">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
