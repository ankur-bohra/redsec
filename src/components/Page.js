import React, { Component } from 'react';
import "./Page.css"
import client1_logo from "../images/client1.png"
import client2_logo from "../images/client2.png"
import client3_logo from "../images/client3.png"
import client4_logo from "../images/client4.png"

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

class QuotesBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {quote_number: Math.floor(this.props.quotes.length/2)};
    }
    nextQuote() {
        if (this.state.quote_number === this.props.quotes.length - 1) {
            this.setState({quote_number: 0});
        } else {
            this.setState({quote_number: this.state.quote_number+1})
        }
    }
    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({
                quote_number: (this.state.quote_number+1) % this.props.quotes.length
            }),
        8000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        var current_quote = this.props.quotes[this.state.quote_number];
        return (
            <div class={"block spanning-hinted-image-block"}>
                <div class="block-header">
                    {this.props.title ? <p class="block-title">{this.props.title}</p>
                                             : null}
                </div>
                <div class="block-content">
                    <div class="image-container">
                        <ul>
                            {
                                this.props.quotes.map(quote => <li><img src={quote[1]["image"]} alt={quote[1]["client"]}/></li>)
                            }
                        </ul>
                        <div class="quote">
                            <p class="quote-text">{current_quote[0]}</p>
                            <p class="quote-source">{current_quote[1].name}</p>
                            <p class="quote-source">{current_quote[1].position + ", " + current_quote[1].client}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function on_case_studies_click(e) {}
function on_request_demo_click(e) {}

class Home extends Component {
    render() {
        var catchy_block =  <CatchyBlock
            catchphrase={["We know you", "better than yourself"]}
            text="Our experts have been in the industry since before clients started their companies. We’ve seen every system and penetrated every single one of them."
            buttons={{
                "Case Studies": on_case_studies_click,
                "Request a Demo": on_request_demo_click
            }}
        />
        var quotes = [
            ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a enim elit", {
                name: "John Doe",
                position: "CEO",
                client: "Client 1",
                image: client1_logo
            }],
            ["Mauris dapibus, libero sit amet convallis feugiat, massa diam cursus dolor, sit amet volutpat ligula enim eu mauris.", {
                name: "John Smith",
                position: "Founder",
                client: "Client 2",
                image: client2_logo
            }],
            ["Mauris fringilla sed risus at aliquet. Sed porta nisl et bibendum tincidunt. Curabitur vitae lorem sodales orci ullamcorper sodales.", {
                name: "Jane Doe",
                position: "VP",
                client: "Client 3",
                image: client3_logo
            }],
            ["Quisque tincidunt turpis elit, vulputate tincidunt lacus egestas ac. Sed scelerisque ullamcorper finibus.", {
                name: "Jane Smith",
                position: "President",
                client: "Client 4",
                image: client4_logo
            }]
        ]
        var quotes_block = <QuotesBlock
            title="Our Clients"
            quotes={quotes}
        />
        return [catchy_block, quotes_block];
    }
}

export default Home;