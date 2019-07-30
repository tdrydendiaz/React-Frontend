import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import { Button } from "reactstrap";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

library.add(faStroopwafel);
library.add(faMugHot, faJava);







// import logo from './logo.svg';


class App extends Component {
  render() {
    return (
      <div>
        <Button
          onClick={this.handleClick}
          color="success" outline={true} disabled={false}>Success</Button>
        <p>Favorite Food: <FontAwesomeIcon icon="stroopwafel" /></p>
        <p>Favorite Drink: <FontAwesomeIcon icon="mug-hot" /></p>
        <p> Also Coffee : <FontAwesomeIcon icon={["fab", "java"]} /></p>


      </div>
    );
  }
}

export default App;
