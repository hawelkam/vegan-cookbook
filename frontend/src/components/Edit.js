import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            EDIT RECIPE
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to={`/show/${this.state.recipe.id}`}><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Recipes List</Link></h4>
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group">
                                <label for="isbn">Name:</label>
                                <input type="text" class="form-control" name="name" value={this.state.recipe.name} onChange={this.onChange} placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <label for="title">Ingredients:</label>
                                <input type="text" class="form-control" name="ingredients" value={this.state.recipe.ingredients} onChange={this.onChange} placeholder="Ingredients" />
                            </div>
                            <div class="form-group">
                                <label for="author">Category:</label>
                                <input type="text" class="form-control" name="category" value={this.state.recipe.category} onChange={this.onChange} placeholder="Category" />
                            </div>
                            <div class="form-group">
                                <label for="published_date">Cooking Time:</label>
                                <input type="text" class="form-control" name="cookingTime" value={this.state.recipe.cookingTime} onChange={this.onChange} placeholder="Cooking Time" />
                            </div>
                            <button type="submit" class="btn btn-default">Update</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit;
