import React, { Component } from 'react';

    import IMG_9183 from "../assets/IMG_9183.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <p><div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src= {IMG_9183}
              alt="photo"
              width="430"
              height="600"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kruthi!</div>
            <div className="brief_description">
              I'm a junior at Carnegie Mellon University. 
              I study statistics and machine learning.
              I like singing and baking.
            </div>
          </div>
        </div>
      </div> </p> 
      </div>
    )
  }
}