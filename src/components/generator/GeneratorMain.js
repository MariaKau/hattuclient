import React, { Component } from 'react';
import axios from 'axios';
import './GeneratorMain.css';

class Generator extends Component {
    constructor() {
        super();
        this.state = {
            quote: null,
        };
        this.getQuotes = this.getQuotes.bind(this);
    }

    getQuotes() {
        axios.get('https://api.whatdoestrumpthink.com/api/v1/quotes/random')
        .then(res  => {
        this.setState({ quote: res.data.message })
        })
    }
    render() {
        return (
            <div className="content">
                <h1 className="title">Sitaattigeneraattori</h1>
                <div className="app">
                    <div className="quote">
                        <p className="quote__text">{this.state.quote}</p>
                    </div>
                    <div className="btn">
                        <button className="btn-quote" onClick={this.getQuotes}>
                            Uusi sitaatti
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Generator;