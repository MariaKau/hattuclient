import React, { Component } from 'react';
import './GeneratorMain.css';
import Container from 'react-bootstrap/Container'
import image from '../generator/women.jpg';
import Button from 'react-bootstrap/Button'


class Generator extends Component {
    constructor() {
        super()
        this.state = {
            quotes: [],
            isChecked: true,
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
            <Container fluid="true">
                <div className="content">
                    <h1 className="title">Feministinen generaattori</h1>
                    
                    <hr className="dash"></hr>
                    </div>
                    <p className="kuvailu">
                        Iskikö huijarisyndrooma? Kiroiluttaako, mutta et pääse alkuun? Generoi alta
                        itsellesi tilanteeseen sopiva feministinen lause tai päästele ärräpäitä generaattorin
                avustuksella.</p>
                    <div className="app">
                        <div className="btngroup">
                        <Button className="btn" id="ajatusbtn" onClick={this.getQuotes1}>
                                AJATUS
                        </Button>
                            <Button className="btn" id="tsemppibtn" onClick={this.getQuotes2}>
                                TSEMPPI
                        </Button>
                            <Button className="btn" id="kiroilubtn" onClick={this.getQuotes3}>
                                K*ROILU!
                        </Button>
                        </div>
                        <Container className="puhekupla">
                        <img src={image} alt="women" height="650" />
                            <div className="quote">
                                <p className="quote_text">{getSentence}</p>
                            </div><br></br>
                        </Container>
                        <p className="copy">Image created by rawpixel.com - www.freepik.com</p>
                    </div>
            </Container>
        );
    }
}

export default Generator;