import React, { Component } from 'react';
import './GeneratorMain.css';


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
        fetch('https://hattu-server.herokuapp.com/api/generaattori/:ajatus', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data }))
            .catch((err) => { throw err })
    }
    getQuotes2() {
        fetch('https://hattu-server.herokuapp.com/api/generaattori/:tsemppi', { mode: 'cors' })
            .then(res => res.json())
            .then(data => this.setState({ quotes: data }))
            .catch((err) => { throw err })
    }
    getQuotes3() {
        fetch('https://hattu-server.herokuapp.com/api/generaattori/:kiroilu', { mode: 'cors' })
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

            <div>
                <h1 className="title">Voimalausegeneraattori</h1>
                <hr className="dash"></hr>
                <div>
                    <div className="btn">
                        <button className="btn-quote-ajatus" onClick={this.getQuotes1}>
                        Ajatus
                        </button>
                        <button className="btn-quote-tsemppi" onClick={this.getQuotes2}>
                        Tsemppi
                        </button> 
                        <button className="btn-quote-kiroilu" onClick={this.getQuotes3}>
                        Kiroilu
                        </button> 
                    </div>
                    <div className="quote">
                        <p className="quote_text">{getSentence}</p>
                    </div>
                </div>

            </div>

        );
    }
}

export default Generator;