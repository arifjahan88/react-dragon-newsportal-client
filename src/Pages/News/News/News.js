import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

const News = () => {
  const news = useLoaderData();
  const { title, author, rating, image_url, details, category_id } = news;
  console.log(news);
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title className="text-center mb-3">
            <h3>{title}</h3>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-around">
              <h6>
                Auther : <small>{author.name}</small>
              </h6>
              <h6>
                Published Date : <small>{author.published_date}</small>
              </h6>
              <div className="d-flex align-items-center">
                <FaStar className="text-warning"></FaStar>
                <span className="ms-1">{rating?.number}</span>
              </div>
            </div>
          </Card.Text>
          <Card.Text>{details}</Card.Text>
          <div className="d-flex justify-content-center">
            <Link to={`/category/${category_id}`}>
              <Button variant="primary">All News This Categories</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
