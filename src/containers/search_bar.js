import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form onSubmit={this.searchCity()}>
                <input type="text" />
                <input type="submit" value="Search"/>
            </form>
        )
    }
    searchCity() {
        console.log('searched something ...');
    }
}