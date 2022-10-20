import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);
  return (
    <div>
      <h3>All Categories : {categories.length}</h3>
      {categories.map((category) => (
        <p key={category.id}>
          <button
            type="button"
            className="btn btn-light border border-secondary w-100 border-opacity-25"
          >
            <Link
              className="text-black text-decoration-none"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </button>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
