import React, { Component } from 'react';
import './GeneratorMain.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from '../generator/women.jpg';
import Button from 'react-bootstrap/Button';
//import { Animated } from 'react-animated-css';


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
                        <hr className="dash"></hr>
                    </Col>
                </Row>
                <Row className="kuvailucontainer">
                    <Col xs={1}></Col>
                    {/* <Col xs={6} >
                        <div>
                            <p className="kuvailu">
                                Iskikö huijarisyndrooma?<br></br>
                                Kiroiluttaako, mutta et pääse alkuun?<br></br>
                                Kaipaatko sanallista rohkaisua?<br></br></p>
                            <p className="kysely">Valitse napeista itsellesi tilanteeseen sopiva feministinen voimalause tai rohkaisu.<br></br>
                                Tai päästele ärräpäitä generaattorin avustuksella.</p>
                        </div>
                    </Col> */}


                    <Col xs={4} className="btngroup">

                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes1}>
                            Ajatus
                        </Button>
                        <br />
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes2}>
                            TSEMPPI
                        </Button>
                        <br />
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes3}>
                            K*ROILU!
                        </Button>

                    </Col>

                    <Col xs={1}></Col>
                </Row>

                <Container className="puhekupla">
                    <div className="imgcontainer">
                        <img className="kuva" src={image} alt="women" height="400" />
                    </div>
                    <div className="quote">
                        <p className="quote_text">{getSentence}</p>
                    </div><br></br>

                    <p className="copy">Image created by rawpixel.com - www.freepik.com</p>
                </Container>
            </Container >
        );
    }
}

export default Generator;