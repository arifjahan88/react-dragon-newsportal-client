import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaTwitch,
  FaInstagram,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandsCarousel from "../BrandsCarousel/BrandsCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical className="w-100">
        <Button variant="outline-primary">
          <FaGoogle></FaGoogle> Log In Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Log In Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook /> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaInstagram /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp /> WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch /> Twitch
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandsCarousel></BrandsCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
