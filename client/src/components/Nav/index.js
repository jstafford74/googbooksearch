
import React, { Component } from "react";
import API from "../../utils/API";
import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import { withRouter } from "react-router-dom";


class SearchBar extends Component {

    state = {
        search: "",
        books: [],
        error: "",
        message: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        // once it clicks it connects to the google book api with the search value
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    // store response in a array
                    let results = res.data.items
                    //map through the array 
                    results = results.map(result => {
                        //store each book information in a new object 
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    console.log(results);
                    // reset the sate of the empty books array to the new arrays of objects with properties geting back from the response
                    this.props.history.push({
                        pathname: '/',
                        state: { books: results }
                    })
                }
            })
            .catch(err => this.setState({ error: err.items }));
    }


    render() {
        return (
            <Navbar bg="light" variant="light" >
                <Navbar.Brand href="#/">Google Book Search</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">Search</Nav.Link>
                    <Nav.Link href="/saved">Saved</Nav.Link>
                    <Form inline onSubmit={this.handleFormSubmit}>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleInputChange} />
                        <Button variant="outline-info" type="submit">Search</Button>
                    </Form>
                </Nav>

            </Navbar>
        )

    }
}

export default withRouter(SearchBar);