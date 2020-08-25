import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

const queryObject = {
  category: null,
  tags: [],
};
//vincular las tags a links de udemy, en un archivo aparte, y hacer dos variables distintas para design y web-dev.
const tags = [
  "Frontend",
  "CSS",
  "React",
  "Javascript",
  "Python",
  "sketch",
  "UI",
  "adobe",
  "UX",
];

const categories = ["design", "software-dev"];

function Tag({ tag, ...rest }) {
  return <div {...rest}>{tag}</div>;
}

function Category({ category, ...rest }) {
  return <div {...rest}>{category}</div>;
}

function Options() {
  const [state, setState] = useState(queryObject);

  function onClickCategory(category) {
    setState({
      ...state,
      category,
    });
  }

  function onClickTag(tag) {
    if (state.tags.length >= 3) {
      return;
    }
    setState({
      ...state,
      tags: [...state.tags, tag],
    });
  }

  //llamar al backend

  function buildQuery() {
    return `?category=${state.category}&tags=${state.tags
      .join(",")
      .toLowerCase()}&tag_operator=or`;
  }

  // Al click se envia la variable buildQuery al backend, se hace la petición a la API y se trae el Json para iterar.

  return (
    <div className="js-content section cover">
      {categories.map((el, i) => (
        <Button key={i} variant="outline-success">
          <Category category={el} onClick={() => onClickCategory(el)} />
        </Button>
      ))}

      <div>
        {tags.map((el, i) => (
          <Button key={i} variant="outline-success">
            <Tag tag={el} key={i} onClick={() => onClickTag(el)} />
          </Button>
        ))}
      </div>
      <Link to={`/search${buildQuery()}`}>
        <button>Search</button>
      </Link>
    </div>
  );
}

export default withAuth(Options);
