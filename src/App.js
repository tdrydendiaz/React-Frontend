import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import { Button } from "reactstrap";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";


import PostThread from './Components/PostThread.js';
import NaviBar from './Components/NavBar.js';
import InputForm from './Components/InputForm.js';


library.add(faStroopwafel);
library.add(faMugHot, faJava);

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {


    this.onLoad();

  };

  onLoad = () => {

    axios
      .get("http://localhost:5000/item/all")
      .then(response => {
        this.setState({
          data: response.data
        });
        console.log(this.state.data)
      });

  }

  render() {
    return (
      <div>
        <NaviBar />

        <InputForm getAll={this.onLoad} />


        <PostThread getAll={this.onLoad} data={this.state.data} />


      </div>
    );
  }

}

export default App;
