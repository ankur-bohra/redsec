import React, { Component } from 'react';
import './Navbar.css'

class NavbarButton extends Component {
    render() {
        return (
            <button
                data-active={this.props.active}
                onClick={() => this.props.onClick()}
            >{this.props.name}</button>
        )
    }
}

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: "Home",
        };
    }

    handleClick(name){
        if (this.state.activeButton === name) {
            return;
        }
        this.setState({activeButton: name});
    }

    renderButton(name) {
        return (
            <NavbarButton
                name={name}
                active={this.state.activeButton === name}
                onClick={() => this.handleClick(name)}
            />
        )
    }

    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li>
                        <p class="logo">
                            <span class="logo--red">Red</span>
                            <span class="logo--sec">Sec</span>
                        </p>
                    </li>
                    <li>{this.renderButton("Home")}</li>
                    <li>{this.renderButton("Services")}</li>
                    <li>{this.renderButton("Pricing")}</li>
                    <li>{this.renderButton("Contact")}</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;