import React from "react";

import { Card, Container, Button, Row } from "react-bootstrap";
import "./style.css";

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Search Results</h3>
                </div>
            </div>
        </div>
    ) : (
            <Container>
                <h1>Search Results</h1>
                <Row>

                    {props.books.map(book => {
                        return (

                            <Card style={{ width: '18rem', margin: '10px auto' }} id={book.title + "Card"} key={book._id} >
                                <Card.Img variant="side" src={book.image} alt={book.title} />
                                <Card.Body>
                                    <Card.Title>
                                        <h3 className="bookTitle">{book.title}</h3>
                                    </Card.Title>
                                    <Card.Text>
                                        <h4 className="bookAuthor">Author: {book.author}</h4>
                                        {/* <p className="bookDescription">Description: {book.description}</p> */}

                                    </Card.Text>
                                    <Button variant="primary" className="saveBook btn btn-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                        Save Book
                    </Button>
                                    <a href={book.link} target="_blank">
                                        <button className="viewBook btn btn-success">
                                            View Book
                                        </button>
                                    </a>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Row>
            </Container >


        )
}
export default SearchResult