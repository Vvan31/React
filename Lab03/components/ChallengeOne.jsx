import React, { Component } from 'react';
//import images
import left from '../assets/look-left.jpeg'
import right from '../assets/look-right.jpeg'

class ChallengeOne extends Component {
  //declare the state here
  state = {
    imageSrc: left
  };

  //click left/right button handler goes here
  btnClick = (e) => {
    console.log("Event: "+ e.target.id);
    (e.target.id == "left")? 
      this.setState(() => ({ imageSrc:left })):
      this.setState(() => ({ imageSrc:right }))
  }
  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.imageSrc}
            alt=""
          />
        </div>
        <button className="btn" id="left" onClick={ this.btnClick }>⭠</button>
        <button className="btn" id="right" onClick={ this.btnClick }>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;