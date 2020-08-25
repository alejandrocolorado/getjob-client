import React, { Component } from "react";

export class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.location.tag,
      githubLink: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h2>{this.state.tag}</h2>

        <p>We require a relevant project on GitHub </p>

        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your Name
        </label>
        <input
          type="text"
          name="githubLink"
          //value={githubLink}
          onChange={this.handleChange}
          id="defaultFormRegisterNameEx"
          className="form-control"
        />
      </div>
    );
  }
}

export default Technology;
