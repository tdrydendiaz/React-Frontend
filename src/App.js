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
      data: {}
    };
  }
  
  componentDidMount() {
    axios
      .get("http://localhost:5000/item/all")
      .then(response => {
        this.setState({
          data: response.data
        });
        const containerDiv = document.getElementById('random');
        let tableHeading = document.createElement('h2');
        tableHeading.id = "tableHeading";
        tableHeading.innerHTML = "Posts";
        containerDiv.appendChild(tableHeading);
        if (document.contains(document.getElementById("table1"))) {
          containerDiv.removeChild(document.getElementById("table1"));
          containerDiv.removeChild(document.getElementById("tableHeading"));
        }
        let container = document.createElement('table');
        container.id = "table1";
        containerDiv.appendChild(container);

        let tableHeadingTitle = document.createElement('th');
        tableHeadingTitle.innerHTML = "Username";
        container.appendChild(tableHeadingTitle);

        let tableHeadingTitle2 = document.createElement('th');
        tableHeadingTitle2.innerHTML = "Content";
        container.appendChild(tableHeadingTitle2);

        let tableHeadingRemovePost = document.createElement('th');
        tableHeadingRemovePost.innerHTML = "Delete";
        container.appendChild(tableHeadingRemovePost);
        let p = this.state.data.length - 1;
        for (let i = p; i > -1; i--) {
          let myRow = document.createElement('tr');

          myRow.id = "row" + i;
          container.appendChild(myRow);

          let myUsername = document.createElement('td');
          myUsername.innerHTML = String(this.state.data[i].username);

          myRow.appendChild(myUsername);

          let myContent = document.createElement('td');
          myContent.innerHTML = String(this.state.data[i].content);
          myRow.appendChild(myContent);

          let myRemovePost = document.createElement('td');
          myRow.appendChild(myRemovePost);
          let removePostbtn = document.createElement('input');
          removePostbtn.type = "button";
          removePostbtn.className = "btn btn-primary";
          removePostbtn.value = "Remove Post";
          let ItemID = this.state.data[i]._id;


          myRemovePost.appendChild(removePostbtn);

        }

      });
  };


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
        <PostThread onRender={() => this.whenPostThreadRender()} />
        <InputForm />
        <div id="random"> </div>


      </div>
    );
  }

  whenPostThreadRender() {
    console.log('PostTread rendered');

  }
}

export default App;
