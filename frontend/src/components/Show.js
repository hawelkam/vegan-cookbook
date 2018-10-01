import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Recipe Details
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>Recipes List</Link></h4>
                        <dl>
                            <dt>Name:</dt>
                            <dd>{this.state.recipe.name}</dd>
                            <dt>Ingredients:</dt>
                            <dd>{this.state.recipe.ingredients}</dd>
                            <dt>Category:</dt>
                            <dd>{this.state.recipe.category}</dd>
                            <dt>Cooking Time:</dt>
                            <dd>{this.state.recipe.cookingTime}</dd>
                        </dl>
                        <Link to={`/edit/${this.state.recipe.id}`} class="btn btn-success">Edit</Link>&nbsp;
                        <button onClick={this.delete.bind(this, this.state.recipe.id)} class="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Show;
