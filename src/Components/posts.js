import React, { Component } from 'react';
import axios from "axios";

function Posts(props) {

    let handleClick = () => {
        let itemToDelete = {
            email: props.email,
            _id: props._id
        }

        axios
            .delete("http://localhost:5000/item/deleteItem", { data: itemToDelete })
            .then(res => props.getAll())

    }

   
        return (
            <div>
                <h4>{props.username}</h4>
                <p>{props.content}</p>
                <button onClick={handleClick}>Delete Item</button>
            </div>
        );
    }





export default Posts;