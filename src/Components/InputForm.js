import React, { Component } from 'react';
import axios from "axios";



class InputForm extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            content: ""
        };

    }

     makeRequest = (e) => {
        e.preventDefault();

        console.log(e.target[0].value)

       let newItem = {
                username: e.target[0].value,
                email: e.target[1].value,
                content: e.target[2].value
            }

        axios
            .post("http://localhost:5000/item/createItem", newItem)

            .then(response => {
                //{console.log("New post")}
              
                this.setState({
                    data: response.data
                });
  
                this.props.getAll();
            
//do load

            });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.makeRequest}>
                    <label for="accUsername" id="accUsernameLabel">Username: </label>
                    <input type="text" id="accUsername" class="form-control" name="accUsername"  />
                    <br />
                    <label for="accEmail" id="accEmailLable">Email: </label>
                     <input type="email" id="accEmail" class="form-control" name="accEmail"  /> 
                    <br />
                    <label for="accContent" id="accContentLable">Content: </label>
                    <input type="content" id="accContent" class="form-control" name="accContent"  />
                    <br />

                    <input type="submit" class="btn btn-primary" value="create post" />
                </form>
            </div>
        );
    }
}

export default InputForm;
