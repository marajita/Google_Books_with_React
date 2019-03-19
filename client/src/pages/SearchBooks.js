import React, { Component } from "react";
import Button from "../components/Button";
import SaveBtn from "../components/SaveBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import Thumbnail from "../components/Thumbnails";



class Books extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    // API.getBooks()
    //   .then(res =>
    //     this.setState({ books: res.data, bookSearch: ""})
    //   )
    //   .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  saveBook = bookData => {
    API.saveBook(bookData)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    console.log("inside form submit");
    event.preventDefault();
    if (this.state.bookSearch) {
      console.log("inside form submit1");
      // API.getGoogleBooks(this.state.bookSearch)
      // .then(res => this.setState({ books: res.data }))
      // .catch(err => console.log(err));

      API.getGoogleBooks(this.state.bookSearch)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
    }
  };
  

  render() {
    return (
      <Container fluid>
      <Row>
        <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
        </Col>
      </Row>
      <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
          {/*   {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book.id}>
                    <Link to={book.volumeInfo.infoLink}>
                      <strong>
                        {book.volumeInfo.title} 
                      </strong>
                    </Link>
                    <SaveBtn onClick={() => this.saveBook({'title':book.volumeInfo.title,'authors':book.volumeInfo.authors,'description':book.volumeInfo.description, 'image':book.volumeInfo.imageLinks.smallThumbnail, 'link':book.volumeInfo.infoLink})} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )} */}

               {!this.state.books.length ? (
                <h1 className="text-center">No books to Display</h1>
              ) : (
                <List>
                  {this.state.books.map(book => {
                    return (
                      <ListItem
                        key={book.volumeInfo.title}
                      > 
        <Row>
        <Col size="xs-8 sm-10">
            <h3>{book.volumeInfo.title}</h3>
            <p>Author(s): {book.volumeInfo.authors ? (book.volumeInfo.authors.join(', ')) : ("")}</p>
          </Col>
          <Col size="xs-8 sm-2">
          {/* <Link to={book.volumeInfo.infoLink}>View</Link> */}
          <a href={book.volumeInfo.infoLink} class="btn btn-default">View</a>

          <SaveBtn onClick={() => this.saveBook({'title':book.volumeInfo.title,'authors':book.volumeInfo.authors,'description':book.volumeInfo.description, 'image':book.volumeInfo.imageLinks.smallThumbnail, 'link':book.volumeInfo.infoLink})} />

          </Col>
          </Row>
          <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={book.volumeInfo.imageLinks.smallThumbnail} /> 
          </Col>
          <Col size="xs-8 sm-10">
          <h5>Description: </h5> <p>{book.volumeInfo.description}</p>
          </Col>
        </Row>
                    </ListItem>
                    );
                    
                  })}

                </List>
              )}
            </Col>
          </Row> 
      </Container>
    );
  }
}

export default Books;
