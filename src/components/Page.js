import React, { Component } from 'react';
import "./Page.css"
import client1_logo from "../images/client1.png"
import client2_logo from "../images/client2.png"
import client3_logo from "../images/client3.png"
import client4_logo from "../images/client4.png"
import client5_logo from "../images/client5.png"
import client6_logo from "../images/client6.png"
import client7_logo from "../images/client7.png"
import client8_logo from "../images/client8.png"
import client9_logo from "../images/client9.png"
import client10_logo from "../images/client10.png"

const QUOTES = {
    "Client 1" : {
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a enim elit",
        index: 0, image: client1_logo,
        source: {name: "John Doe",position: "CEO"}
    },
    "Client 2" : {
        quote: "Mauris dapibus, libero sit amet convallis feugiat, massa diam cursus dolor, sit amet volutpat ligula enim eu mauris.",
        index: 1, image: client2_logo,
        source: {name: "John Smith",position: "Founder"}
    },
    "Client 3" : {
        quote: "Mauris fringilla sed risus at aliquet. Sed porta nisl et bibendum tincidunt. Curabitur vitae lorem sodales orci ullamcorper sodales.",
        index: 2, image: client3_logo,
        source: {name: "Jane Doe",position: "VP"}
    },
    "Client 4" : {
        quote: "Quisque tincidunt turpis elit, vulputate tincidunt lacus egestas ac. Sed scelerisque ullamcorper finibus.",
        index: 3, image: client4_logo,
        source: {name: "Jane Smith",position: "President"}
    },
    "Client 5" : {
        quote: "Nunc nisl metus, aliquam nec odio vel, pharetra maximus diam. Aenean quis vestibulum nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        index: 4, image: client5_logo,
        source: {name: "John Doe",position: "CEO"}
    },
    "Client 6" : {
        quote: "Maecenas iaculis sollicitudin justo, nec pretium lorem porta nec. Nulla eros lectus, vehicula gravida vehicula ac, sollicitudin ut diam.",
        index: 5, image: client6_logo,
        source: {name: "John Smith",position: "Founder"}
    },
    "Client 7" : {
        quote: "Nullam vel aliquet nunc.",
        index: 6, image: client7_logo,
        source: {name: "Jane Doe",position: "VP"}
    },
    "Client 8" : {
        quote: "Nulla id ligula condimentum, aliquet nisi ac, aliquam urna. Aliquam posuere euismod tincidunt.",
        index: 7, image: client8_logo,
        source: {name: "Jane Smith",position: "President"}
    },
    "Client 9" : {
        quote: "Fusce nec erat justo. Nam sed vulputate quam. Vivamus lacus purus, consequat id rutrum nec, viverra sed ante.",
        index: 8, image: client9_logo,
        source: {name: "Jane Doe",position: "VP"}
    },
    "Client 10" : {
        quote: "Proin pretium ultricies erat, et tincidunt nunc posuere at.",
        index: 9, image: client10_logo,
        source: {name: "Jane Smith",position: "President"}
    },
}

const STEPS = [
    {
        title: "Information Gathering",
        text: "The client gives us information about the scope of testing. We ensure there will be no testing done outside what has been listed."
    },
    {
        title: "Reconnaissance",
        text: "We gather overlooked publicly-available information from the information provided by the client to understand the system better."
    },
    {
        title: "Discovery and Scanning",
        text: "We use the gathered information to look for ports and services available for hosts and subdomains."
    },
    {
        title: "Vulnerability Assessment",
        text: "A vulnerability assessment is conducted ito gain initial knowledge and identify potential security weaknesses that could allow an attacker to gain access to the environment being tested."
    },
    {
        title: "Exploitation",
        text: "After recognisiing the vulnerabilities, our experts validate, attack and exploit those vulnerabilities."
    },
    {
        title: "Final Report",
        text: (
`We create a report explaining the vulnerabilites recognized and how they were exploited as accurately as possible.
We suggest changes in the system and analyze the extent of the impact possible if said vulnerabilities were to be exploited by a malicious attacker.`
        )
    }
]

class BlockHeader extends Component {
    render() {
        if (!this.props.title) {
            return null;
        } else {
            return (
                <div className="block-header">
                    <p>{this.props.title}</p>
                </div>
            )
        }
    }
}

class BlockContent extends Component {
    render() {
        return (
            <div className="block-content">
                {this.props.children}
            </div>
        )
    }
}

class Block extends Component {
    render() {
        return (
            <div className={"block" + (this.props.subclass ? " " + this.props.subclass : "")}>
                <BlockHeader title={this.props.title}/>
                <BlockContent>
                    {this.props.children}
                </BlockContent>
            </div>
        )
    }
}

class CatchyBlock extends Component {
    render() {
        let buttons_list = []
        for (const [button, callback] of Object.entries(this.props.buttons)) {
            buttons_list.push(<li><button key={button} onClick={callback}>{button}</button></li>)
        };
        return (
            <Block title={this.props.title} subclass="catchy-block">
                <div className="catchphrase">
                    {this.props.catchphrase.map(line => <p>{line}</p>)}
                </div>
                <p>{this.props.text}</p>
                <ul>{buttons_list}</ul>
            </Block>
        );
    }
}

class QuotesBlock extends Component {
    constructor(props) {
        super(props);
        this.order = Object.keys(this.props.quotes).sort(
            (a, b) => {return this.props.quotes[a].index - this.props.quotes[b].index});
        this.state = {
            client: this.order[0]
        }
    }
    nextQuote() {
        let new_client = this.order[(this.order.indexOf(this.state.client) + 1)%this.order.length];
        this.setState({
            client: new_client,
        })
    }
    componentDidMount() {
        this.interval = setInterval(() => this.nextQuote(), 8000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    handleClick(client) {
        this.setState({
            client: client
        })
        clearInterval(this.interval);
        this.interval = setInterval(() => this.nextQuote(), 8000);
    }
    render() {
        let image_list = []
        let quotes = this.props.quotes;
        let current_client = this.state.client;
        this.order.forEach((client, i) => {
            let li = (
                <li key={i}>
                    <button onClick={() => this.handleClick(client)}>
                        <img src={quotes[client].image} alt={client} className={current_client === client ? "active" : null}/>
                    </button>
                </li>
            )
            image_list.push(li);
        })
        let quote_info = quotes[current_client];
        return (
            <Block title={this.props.title} subclass="quotes-block">
                <div className="images"><ul>{image_list}</ul></div>
                <div className="quote">
                    <p><i>{quote_info.quote}</i></p>
                    <p>{quote_info.source.name}</p>
                    <p>{quote_info.source.position + ", " + current_client}</p>
                </div>
            </Block>
        );
    }
}

class LinkedStepsBlock extends Component {
    render() {
        let steps = this.props.steps;
        let step_list = []
        for (let i = 0; i < steps.length; i++) {
            let step = steps[i];
            let li = (
                <li key={i}>
                    <div className="step-number">{i + 1}</div>
                    {i>0 ? <div className="vertical-line"></div> : null}
                    <div className="step-content">
                        <p>{step.title}</p>
                        <p>{step.text}</p>
                    </div>
                </li>
            )
            step_list.push(li);
        }
        return (
            <Block title={this.props.title} subclass="steps-block">
                <div className="steps">
                    <ul>{step_list}</ul>
                </div>
            </Block>
        );
    }
}

class ClosingBlock extends Component {
    render() {
        return (
            <Block title={this.props.title} subclass="closing-block">
                <div class="logo">
                    <p>
                        <span class="logo--red">Red</span>
                        <span class="logo--sec">Sec</span>
                    </p>
                </div>
                <span class="credits">Made by Arav and Ankur</span>
                <span class="email">info@redsec.com</span>
            </Block>
        );
    }
}

function on_case_studies_click(e) {}
function on_request_demo_click(e) {}

class Home extends Component {
    render() {
        let catchy_block =  <CatchyBlock
            catchphrase={["We know you", "better than yourself"]}
            text="Our experts have been in the industry since before clients started their companies. We’ve seen every system and penetrated every single one of them."
            buttons={{
                "Case Studies": on_case_studies_click,
                "Request a Demo": on_request_demo_click
            }}
        />
        let quotes_block = <QuotesBlock title="Our Clients" quotes={QUOTES}/>
        let steps_block = <LinkedStepsBlock title="Our Process" steps={STEPS}/>
        let closing_block = <ClosingBlock/>
        return [catchy_block, quotes_block, steps_block, closing_block];
    }
}

export default Home;