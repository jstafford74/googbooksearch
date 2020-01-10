import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
// import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


class SearchBook extends Component {
    //create state
    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    //function to take value of what enter in the search bar
    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }


    handleSavedButton = event => {
        // console.log(event)
        event.preventDefault();
        console.log(this.props.location.state.books)
        let savedBooks = this.props.location.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        console.log(event.target.id);
        API.saveBook(savedBooks)
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <Container fluid>

                <Jumbotron />
                <br></br>
                <Container>
                    <SearchResult books={
                        this.props.location.state ?
                            this.props.location.state.books : []
                    }
                        handleSavedButton={this.handleSavedButton} />
                </Container>
            </Container>
        )
    }

}


export default SearchBook