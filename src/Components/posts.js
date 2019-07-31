import React, { Component } from 'react';
import axios from "axios";

function Posts(props) {
// let defaultProps = {
//    username:"Matt"
//  }

// let propTypes = {
// model: object.isRequired,
// title: string
// }

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
          <tr>
              <td >
                <h4>{props.username}</h4>
                <p>{props.content}</p>
                <button onClick={handleClick}>Delete Item</button>
           </td>
           </tr>
        );
    }





export default Posts;