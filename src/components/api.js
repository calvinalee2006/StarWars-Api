import React, { component } from "react";
import axios from axios;

 export default class ApiInfo extends React.Component {
    constructor(props) {
        super (props) ;
        this.state = {
            SWAPIURL: "",
        }
    };

    componentDidMount(){
        axios.get('https://swapi.dev/api/people/')
        .then((response) => {
            this.setState({SWAPIURL:response.data.people});
        })
        .catch (error => {
            console.log(error);
        });
    }

    render() {
        const {SWAPIURL} = this.state;
        return SWAPIURL
    }
}
