import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const RegisterForm = () => {
  const { createUser, updateprofile } = useContext(AuthContext);
  const [error, seterror] = useState("");
  const [cheaked, setCheaked] = useState(false);
  const Handleclick = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photourl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        seterror("");
        form.reset();
        HandleUpdateProfile(name, photourl);
      })
      .catch((error) => seterror(error.message));

    console.log(name, photourl, email, password);
  };

  const HandleUpdateProfile = (name, photourl) => {
    const profile = {
      displayName: name,
      photoURL: photourl,
    };
    updateprofile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const HandleClickTerms = (event) => {
    setCheaked(event.target.checked);
  };
  return (
    <div className="container mx-auto w-75">
      <h2 className="text-info">Please Register ! !</h2>
      <Form onSubmit={Handleclick}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Your Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your Photo URL</Form.Label>
          <Form.Control
            name="photo_url"
            type="text"
            placeholder="Enter Your Photo Url link"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Enter your Password"
            required
          />
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              onClick={HandleClickTerms}
              label={
                <>
                  Accept{" "}
                  <Link to="/termsandconditions">Tearms And Conditions</Link>
                </>
              }
            />
          </Form.Group>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!cheaked}>
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegisterForm;
