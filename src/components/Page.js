import React, { Component } from 'react';
import "./Page.css"

const alignments = {
    LEFT: 89/1096,
    DISTANT_LEFT: 312/1096,
    CENTER: 545/1096,
    DISTANT_RIGHT: 784/1096,
    RIGHT: 1007/1096
}


class CatchyBlock extends Component {
    render() {
        return (
            <div class={"block catchy-block"}>
                <div class="block-header">
                    {this.props.title ? <p class="block-title">{this.props.title}</p>
                                             : null}
                </div>
                <div class="block-content">
                    <div class="catchphrase">
                        {this.props.catchphrase.map(line => <p>{line}</p>)}
                    </div>
                    <p>{this.props.text}</p>
                    <ul>
                        {
                            Object.keys(this.props.buttons).map(
                                (text, i) => <li><button key={i} onClick={this.props.buttons[text]}>{text}</button></li>)
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

function on_case_studies_click(e) {}
function on_request_demo_click(e) {}

class Home extends Component {
    render() {
        return (
            <CatchyBlock
                catchphrase={["We know you", "better than yourself"]}
                text="Our experts have been in the industry since before clients started their companies. We’ve seen every system and penetrated every single one of them."
                buttons={{
                    "Case Studies": on_case_studies_click,
                    "Request a Demo": on_request_demo_click
                }}
            />
        )
    }
}

export default Home;