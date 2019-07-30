import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import { Button } from "reactstrap";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";


import PostThread from './Components/PostThread.js';
import NaviBar from './Components/NavBar.js';


library.add(faStroopwafel);
library.add(faMugHot, faJava);



class App extends Component {
  render() {
    return (
      <div>  
          <NaviBar />
        <Button
          onClick={this.handleClick}
          color="success" outline={true} disabled={false}>Success</Button>
        <p>Favorite Food: <FontAwesomeIcon icon="stroopwafel" /></p>
        <p>Favorite Drink: <FontAwesomeIcon icon="mug-hot" /></p>
        <p> Also Coffee : <FontAwesomeIcon icon={["fab", "java"]} /></p>
        <PostThread onRender={() => this.whenPostThreadRender()}/>
      


      </div>
    );
  }

   whenPostThreadRender() {
    console.log('PostTread rendered');

}
}

export default App;
