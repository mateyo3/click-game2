import React, { Component } from "react";



class Navbar extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    topScore: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
 	<div className="navbar">
 		<span>Memory Game: Click a Corgi puppy to earn points, but don't click on the same Corgi twice!</span>
 		<span className="message">It's Play Time!</span>
 	</div>
    );
  }
}

export default Navbar;