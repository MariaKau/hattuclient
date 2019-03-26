import React, { Component } from 'react';
import './GeneratorMain.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../generator/women.jpg';
import Button from 'react-bootstrap/Button';
import { Animated } from 'react-animated-css';


class Generator extends Component {
    constructor() {
        super()
        this.state = {
            quotes: [],
        }
        this.getQuotes1 = this.getQuotes1.bind(this);
        this.getQuotes2 = this.getQuotes2.bind(this);
        this.getQuotes3 = this.getQuotes3.bind(this);

    }

    getQuotes1() {
        fetch('https://hattu-server.herokuapp.com/api/ajatus/:ajatus', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data }))
            .catch((err) => { throw err })
    }
    getQuotes2() {
        fetch('https://hattu-server.herokuapp.com/api/tsemppi/:tsemppi', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data }))
            .catch((err) => { throw err })
    }
    getQuotes3() {
        fetch('https://hattu-server.herokuapp.com/api/kiroilu/:kiroilu', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data }))
            .catch((err) => { throw err })
    }


    render() {
        console.log(this.state.quotes)
        const getSentence = this.state.quotes.map((powerQuote, i) =>
            <p key={i}>{powerQuote.sentence}</p>
        );

    

        return (
            <Container className="whole" fluid="true">
                <Row>
                    <Col><h1 className="title">Feministinen generaattori</h1>
                    </Col>
                </Row>
                <Row className="kuvailucontainer">

                    <Col md={{ span: 3, offset: 3 }} className="btngroup">
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes1} >
                            Päivän ajatus
                        </Button>
                        <br />
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes2}>
                            Tsemppi
                        </Button>
                        <br />
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes3}>
                            K*ROILU!
                        </Button>
                    </Col>
                    <Col md={4} className="bubble">
                        <div id="Rectangle">
                        <div id="SpeechBubble">{getSentence}</div>
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