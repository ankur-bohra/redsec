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
    "Codesk" : {
        quote: "Every cybersecurity firm we've tried before RedSec has failed to convince us of their precision. RedSec had us in the first ten minutes.",
        index: 0, image: client1_logo,
        source: {name: "Malcolm Function",position: "CEO"}
    },
    "Datact" : {
        quote: "RedSec's experts clearly dominate the field when it comes to penetration testing, they matched whole firms' analyses in their demo.",
        index: 1, image: client2_logo,
        source: {name: "Piff Jenkins",position: "VP"}
    },
    "Emult" : {
        quote: "RedSec has been our go-to cybersecurity firms for three decades, coincidentally we've also had zero breaches in three decades.",
        index: 2, image: client3_logo,
        source: {name: "Douglas Lyphe",position: "Senior Engineer"}
    },
    "Opence" : {
        quote: "We're a cybersecurity company too and we use RedSec.",
        index: 3, image: client4_logo,
        source: {name: "Miles Tone",position: "CFO"}
    },
    "Software Socket" : {
        quote: "Using RedSec to secure our softwares allows us to do what we do best, and patch holes as RedSec shows us the way.",
        index: 4, image: client5_logo,
        source: {name: "Fig Nelson",position: "Team Lead"}
    },
    "Metech" : {
        quote: "Switching to RedSec from an internal security team completely stopped the frequent breaches, and saved us lots of cash better spent elsewhere.",
        index: 5, image: client6_logo,
        source: {name: "Eleanor Fant",position: "Ex-CEO"}
    },
    "Computism" : {
        quote: "Quick and detailed testing. Phenomenal services.",
        index: 6, image: client7_logo,
        source: {name: "Gunther Beard",position: "COO"}
    },
    "NetSystems.io" : {
        quote: "Our company has went through several cutbacks in changes in leadership in the past. No one has ever considered changing from RedSec.",
        index: 7, image: client8_logo,
        source: {name: "Guy Mann",position: "President"}
    },
    "Techip" : {
        quote: "The best of the best.",
        index: 8, image: client9_logo,
        source: {name: "Dianne Ameter",position: "Senior Engineer"}
    },
    "Nicalc" : {
        quote: "Brilliant.",
        index: 9, image: client10_logo,
        source: {name: "Valentino Morose",position: "CEO"}
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
        text: "A vulnerability assessment is conducted to gain initial knowledge and identify potential security weaknesses that could allow an attacker to gain access to the environment being tested."
    },
    {
        title: "Exploitation",
        text: "After recognising the vulnerabilities, our experts validate, attack and exploit those vulnerabilities."
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
    handleHover(client) {
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
                    <button onMouseEnter={() => this.handleHover(client)}>
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
                    <p><i>“{quote_info.quote}”</i></p>
                    <p>{quote_info.source.name}</p>
                    <p><b>{quote_info.source.position + ", " + current_client}</b></p>
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
                <hr style={{"height" :182*(steps.length-1)}}/>
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
                <span class="credits">Made by Ankur and Arav</span>
                <span class="email"><i>Icons from namelix.com</i> ⠀⠀⠀info@redsec.com</span>
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