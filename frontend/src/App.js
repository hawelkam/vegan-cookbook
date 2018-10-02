import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    componentDidMount() {
        axios.get('/recipes')
            .then(res => {
                this.setState({recipes: res.data});
                console.log(this.state.recipes);
            });
    }

    render() {
        return (
            <div class="container">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            VEGAN RECIPES LIST
                        </h3>
                    </div>
                    <div class="panel-body">
                        <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign"
                                                     aria-hidden="true"></span></Link></h4>
                        <table class="table table-stripe">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Ingredients</th>
                                <th>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.recipes.map(r =>
                                <tr>
                                    <td><Link to={`/show/${r.id}`}>{r.name}</Link></td>
                                    <td>{r.ingredients}</td>
                                    <td>{r.description}</td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                        <Link to={`/create`}>Create New Recipe</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
