import React from "react";
import { Link } from "react-router-dom";

const TearmsAndCondition = () => {
  return (
    <div>
      <h3>This is Our Tearms And Conditions.</h3>
      <p>
        <Link to="/register">Go To Register</Link>
      </p>
    </div>
  );
};

export default TearmsAndCondition;
