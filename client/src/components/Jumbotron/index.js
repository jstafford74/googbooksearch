import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


const mainScreen = () => {
    return (
        <Jumbotron fluid>
            <Container textAlign="center">
                <h1>(React) Google Books Search</h1>
                <p>Search for and Save Books of Interest</p>
            </Container>
        </Jumbotron>

    );
}

export default mainScreen;