import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';
import ErrorBoundry from '../Components/ErrorBoundry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            //states can be changed
            robots: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //import information from website
            .then((response) => response.json())
            .then((users) => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value }); //change state for search
    };

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter((robot) => {
            //filter compare to searchfield
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        return !robots.length ? ( // if theres no robots output loading
            <h1>Loading...</h1>
        ) : (
            // else load robo friends and search
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;
