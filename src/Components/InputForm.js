import React, { Component } from 'react';

import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';



class InputForm extends Component {
    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.toggleSplit = this.toggleSplit.bind(this);
        this.state = {
            dropdownOpen: false,
            splitButtonOpen: false
        };
    }
    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit() {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }
    render() {
        return (
            <div>
                <p>Input your details</p>
                <InputGroup>
                    <InputGroupAddon addonType="prepend"><Button>I'm a button</Button></InputGroupAddon>
                    <Input />
                </InputGroup>
                <br />
                <InputGroup>
                    <Input />
                    <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            Button Dropdown
            </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                </InputGroup>
                <br />
                <InputGroup>
                    <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
                        <Button outline>Split Button</Button>
                        <DropdownToggle split outline />
                        <DropdownMenu>
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>
                    <Input placeholder="and..." />
                    <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
                </InputGroup>

            </div>
        );
    }
}

export default InputForm;
