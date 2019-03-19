import React from "react";
import Thumbnail from "../Thumbnails";
import { Container, Row, Col } from "../Grid";
import SaveBtn from "../SaveBtn";

// Exporting both BookList and BookListItem from this file

// BookList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// BookListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
title,
authors,
href,
thumbnail,
description
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
        <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>Author(s): {authors}</p>
          </Col>
          <Col size="xs-8 sm-2">
          <a href={href}>View</a>
          </Col>
          </Row>
          <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} /> 
          </Col>
          <Col size="xs-8 sm-9">
          <h5>Description: </h5> <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
