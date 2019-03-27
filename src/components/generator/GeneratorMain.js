import React, { Component } from 'react';
import './GeneratorMain.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../generator/women.jpg';
import Button from 'react-bootstrap/Button';
//import { Animated } from 'react-animated-css';
import Bubble from './Bubble';
import Bubble2 from './Bubble2';
import Bubble3 from './Bubble3';


class Generator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quotes: [],
            animateBubble: true,
            category: null
            
        }
        this.getQuotes1 = this.getQuotes1.bind(this);
        this.getQuotes2 = this.getQuotes2.bind(this);
        this.getQuotes3 = this.getQuotes3.bind(this);

    }

    getQuotes1() {
        fetch('https://hattu-server.herokuapp.com/api/ajatus/:ajatus', { mode: 'cors' })
            .then(res => res.json())
            .then(data => {
                this.setState({ quotes: data, category: "ajatus", animateBubble: true });
            })
            .catch((err) => { throw err })
    }
    getQuotes2() {
        fetch('https://hattu-server.herokuapp.com/api/tsemppi/:tsemppi', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data, category: "tsemppi", animateBubble: true  }))
            .catch((err) => { throw err })
    }
    getQuotes3() {
        fetch('https://hattu-server.herokuapp.com/api/kiroilu/:kiroilu', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data, category: "kiroilu", animateBubble: true  }))
            .catch((err) => { throw err })
    }

    animationDone = () => {
        this.setState({animateBubble: false});
    }

    render() {
        console.log(this.state.quotes)
        const getSentence = this.state.quotes.map((powerQuote, i) => {
        if(this.state.category === "ajatus") {
            return <Bubble key={i} value={powerQuote} animate={this.state.animateBubble} doneAnimating={this.animationDone} />
        } if (this.state.category === "tsemppi") {
            return <Bubble2 key={i} value={powerQuote} animate={this.state.animateBubble} doneAnimating={this.animationDone} />
        } if (this.state.category === "kiroilu") {
            return <Bubble3 key={i} value={powerQuote} animate={this.state.animateBubble} doneAnimating={this.animationDone} />
        }
    });


        return (
            <Container className="whole" fluid="true">
                <Row>
                    <Col><h1 className="title">Feministinen generaattori</h1>
                    </Col>
                </Row>
                <Row className="kuvailucontainer">

                    <Col md={{ span: 3, offset: 2 }} className="btngroup">
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes1} >
                            Päivän ajatus
                        </Button>
                        <br />
                        <Button className="btn" id="tsemppibtn" onClick={this.getQuotes2}>
                            Tsemppi
                        </Button>
                        <br />
                        <Button className="btn" id="kiroilubtn" onClick={this.getQuotes3}>
                            K*ROILU!
                        </Button>
                    </Col>
                    <Col md={4} className="bubble">
                        <div id="Rectangle">
                        <div>{getSentence}</div>
                        </div>

                        {/* <hgroup className="speechbubble">
                        <h4 className="bubblequote">{getSentence}</h4>
                    </hgroup> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <img className="kuva" src={image} alt="women" style={{ width: "100%", height: "auto" }} />
                        <p className="copy">Image created by rawpixel.com - www.freepik.com</p>
                    </Col>
                </Row>
            </Container >
        );
    }
}

export default Generator;