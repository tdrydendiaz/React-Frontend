import React, { Component } from 'react';
import axios from "axios";


class PostThread extends Component {

    
makeRequest = () => {
            axios
                .get("http://localhost:5000/item/all")
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
