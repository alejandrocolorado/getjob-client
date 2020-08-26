import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

const queryObject = {
  category: null,
  tags: [],
};

//vincular las tags a links de udemy, en un archivo aparte, y hacer dos variables distintas para design y web-dev.
const tagsSoftware = [
  "Frontend",
  "CSS",
  "react",
  "Javascript",
  "php",
  "node.js",
  "python",
];
const tagsDesign = ["sketch", "UI/UX", "html", "Figma", "CSS"];

const categories = ["design", "software-dev"];

function Tag({ tag, ...rest }) {
  return (
    <Button variant="outline-success" {...rest}>
      {tag}
    </Button>
  );
}

function Category({ category, ...rest }) {
  return <div {...rest}>{category}</div>;
}

function Options() {
  const [state, setState] = useState(queryObject);

  function isTagActive(tag, selectedTags) {
    return selectedTags.includes(tag);
  }

  function renderTags(tags) {
    return tags.map((el, i) => (
      <Tag
        active={isTagActive(el, state.tags)}
        tag={el}
        key={i}
        onClick={() => onClickTag(el)}
      />
    ));
  }

  function onClickCategory(category) {
    setState({
      ...state,
      category,
    });
  }

  function onClickTag(tag) {
    if (state.tags.includes(tag)) {
      return setState({
        ...state,
        tags: state.tags.filter((el) => el !== tag),
      });
    } else if (state.tags.length < 3) {
      setState({
        ...state,
        tags: [...state.tags, tag],
      });
    }
  }

  //llamar al backend

  function buildQuery() {
    return `?category=${state.category}&tags=${state.tags.join(
      ","
    )}&tag_operator=or`;
  }

  // Al click se envia la variable buildQuery al backend, se hace la petición a la API y se trae el Json para iterar.

  return (
    <div className="js-content section cover">
      {categories.map((el, i) => (
        <Button key={i} variant="outline-success">
          <Category category={el} onClick={() => onClickCategory(el)} />
        </Button>
      ))}
      <div className="tags">
        {state.category &&
          renderTags(state.category === "design" ? tagsDesign : tagsSoftware)}
      </div>
      <div className='button-options'>
        <Link to={`/search${buildQuery()}`}>
          <Button color="grey" size="sm">
            Common!
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default withAuth(Options);
