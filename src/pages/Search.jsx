import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const queryObject = {
  category: null,
  skills: [],
};
//vincular las tags a links de udemy, en un archivo aparte, y hacer dos variables distintas para design y web-dev.
const tags = ["Frontend", "CSS", "React", "Javascript", "Python", "sketch", "product design", "UI", "adobe", "UX"];

const categories = ["design", "web"];

function Tag({ tag, ...rest }) {
  return <div {...rest}>{tag}</div>;
}

function Category({ category, ...rest }) {
  return <div {...rest}>{category}</div>;
}

export default function () {
  const [state, setState] = useState(queryObject);

  function onClickCategory(category) {
    setState({
      ...state,
      category,
    });
  }
/* 
  function onClickSkills(skills) {
    setState({
      ...state,
      skills,
    });
  } */

  function onClickGo() {
    axios
      .post("http://localhost:4000/api/test", {
        query: buildQuery(),
      })
      .then((responseFromApi) => {
        this.setState({
          job: responseFromApi.data.jobs,
        });
        //console.log(responseFromApi.data);
        console.log(this.state.job);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //llamar al backend

  function buildQuery() {
    return `category=${state.category}&tags=/* ${state.skills.join(",").toLowerCase()} */`;
  }

  // Al click se envia la variable buildQuery al backend, se hace la petición a la API y se trae el Json para iterar.

  return (
    <div>
      {categories.map((el, i) => (
       
          <Button key={i} variant="outline-success">
            <Category category={el} onClick={() => onClickCategory(el)} />
          </Button>
        
      ))}

      <div>
        {tags.map((el, i) => (
          <Button key={i} variant="outline-success">
          <Tag tag={el} key={i} />
          </Button>
        ))}
      </div>
      <button onClick={onClickGo}>go</button>
    </div>
  );
}
