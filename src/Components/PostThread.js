import React, { Component } from 'react';
import _ from 'lodash';
import {
    Table
} from 'reactstrap';
import Posts from './Posts'


function PostThread(props) {

    const {
        data
    } = props;

    return (
        <div >
            <Table striped bordered hover variant="dark">
                <tbody>
                    {_.reverse(data).map((item, index) => (
                        <Posts key={index} getAll={props.getAll} username={item.username} content={item.content} _id={item._id} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}






export default PostThread;
