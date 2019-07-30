import React, { Component } from 'react';
import axios from "axios";


class PostThread extends Component {
    makeRequest = () => {
        axios
            .get("http://www.omdbapi.com/?apikey=cf6d6c63&t=hop")
            .then(response => {
                this.setState({
                    data: response.data
                });
            });
    };


    render() {


        return (
            <div>
                <p>All the Posts</p>

            </div>
        );
    }

}




export default PostThread;
