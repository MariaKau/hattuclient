import React, { Component } from 'react';
import './GeneratorMain.css';


class Generator extends Component {
    constructor() {
        super()
        this.state = {
            quotes: []
        }
        this.getQuotes = this.getQuotes.bind(this);
    }


    getQuotes() {

        
        fetch('https://hattu-server.herokuapp.com/api/generaattori', { mode: 'cors' })
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

            <div className="content">
                <h1 className="title">Voimalausegeneraattori</h1>
                <hr className="dash"></hr>
                <h3>Tarvitsetko rohkaisua? Kaipaatko ajatusta päivään?</h3>
                <h5>Valitse kategoria</h5>

                {/* <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" id="ajatus" name="defaultExampleRadios" />
                    <label class="custom-control-label" >Päivän ajatus</label>
                </div>

                <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" class="custom-control-input" id="tsemppi" name="defaultExampleRadios" />
                    <label class="custom-control-label" >Tsemppilause</label>
                </div> */}

                
                <div className="app">
                    <div className="btn">
                        <button className="btn-quote" onClick={this.getQuotes}>
                            Hae sitaatti
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