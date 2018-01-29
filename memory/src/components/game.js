import React, { Component } from 'react';
import Images from '../image.json';

const shuffle = require('shuffle-array');


let images = Images;
  for (let i = 0; i < images.length; i++) {
    // images[i]  = image[Math.floor(Math.random()*image.length)];
    images[i] = images[i].imgURL;
  }

 let useImage = shuffle(images);
  console.log(useImage);


  class Game extends Component {
    // Setting this.state.score to the score json array
    constructor(){
      super()
      this.handleClick = this.handleClick.bind(this)
        this.state = {
        score: 0,
        topScore: 0,
        click: false,
        image: Images
      };
    }
  

    // handles game reset score to 0
    handleGameReset = () => {
        this.setState({ score: this.state.score = 0});
    };

    // handles click state
    handleClick = (click) => {
       this.setState({ click: click.target.click });
        console.log(this.state.click);
    };
    
    // handleIncreaseScore = () => {
    //   if (this.state.click === !this.state.click) {
    //     this.handleGameReset();
    //   } else {
    //     this.setState({ score: this.state.score + 1 });
    //   }
    // };

    // handles score increase
    handleIncreaseScore  = () => {
        this.setState({ score: this.state.score + 1 });
        console.log("Score: " + this.state.score + " ** " + "Clicked: " + !this.state.click);
    };


    // handles top score
    handleSetTopScore  = () => {
      let currentScore = this.state.score;
      let currentTopScore = this.state.topScore;

      if (currentScore > currentTopScore) {
        this.setState({ topScore: this.state.topScore + 1 });
      }
       console.log("Top Score: " + this.state.topScore);
    };
    

    

    render() {
      return (
    	<div className="game-containter">
        <div className="navbar">
          <span>Score: {this.state.score} | Top Score: {this.state.topScore} </span>
        </div>

        <div className="image-container-1">
          <img src={useImage[0]} alt={useImage[0]} onClick={this.handleIncreaseScore} id="0" height="200" width="200" />
          <img src={useImage[1]} alt={useImage[1]} onClick={this.handleIncreaseScore} id="1" height="200" width="200" />
          <img src={useImage[2]} alt={useImage[2]} onClick={this.handleIncreaseScore} id="2" height="200" width="200" />
          <img src={useImage[3]} alt={useImage[3]} onClick={this.handleIncreaseScore} id="3" height="200" width="200" />
        </div>
        <div className="image-container-2">
          <img src={useImage[4]} alt={useImage[4]} onClick={this.handleIncreaseScore} id="4" height="200" width="200" />
          <img src={useImage[5]} alt={useImage[5]} onClick={this.handleIncreaseScore} id="5" height="200" width="200" />
          <img src={useImage[6]} alt={useImage[6]} onClick={this.handleIncreaseScore} id="6" height="200" width="200" />
          <img src={useImage[7]} alt={useImage[7]} onClick={this.handleIncreaseScore} id="7" height="200" width="200" />
        </div>
        <div className="image-container-2">
          <img src={useImage[8]} alt={useImage[8]} onClick={this.handleIncreaseScore} id="8" height="200" width="200" />
          <img src={useImage[9]} alt={useImage[9]} onClick={this.handleIncreaseScore} id="9" height="200" width="200" />
          <img src={useImage[10]} alt={useImage[10]} onClick={this.handleIncreaseScore} id="10" height="200" width="200" />
          <img src={useImage[11]} alt={useImage[11]} onClick={this.handleIncreaseScore} id="11" height="200" width="200" />
        </div>
    	</div>


      );
    }
  }


  // const Game = () => (
  //     <div className="game-containter">
  //       <img src={"https://github.com/mateyo3/click-game/blob/master/click/public/assets/images/corgi-pup-01.jpg?raw=true"} alt="corgi-pup-01" className="img-responsive"/>
  //     </div>




export default Game;



        
