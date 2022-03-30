import React from "react";
import axios from "axios";

export default class ApiInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        this.setState({ URL: response.data.people });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { URL } = this.state;
    return URL;
  }
}
