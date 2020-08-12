import React from 'react';
import image from '../images/Game-screenshot.png';
// import '../home.css';
import 'bootstrap/dist/css/bootstrap.css';

console.log(image)

function Home(){
  return(
    <div className="home">
      <center>
      <div class="row">
        <div class="col-sm-12">
          <div class="opening">
        <p> Boris Johnson is on his way to Sainsbury's to get some milk and nappies, but in order to avoid another #barnardcastle, he has to ensure he remains socially distanced.</p>
        <p> If you get too close to other people walking down the street the InfectionRate will go up and it will be game over! </p>
        <p> It's your job to navigate Boris safely around the streets of London, keeping 2 meters away from fellow pedestrians. </p>
          </div>
        <img src={image} id="borisGame"></img>
        </div>
        </div>
      </center>
    </div>
  )
}

export default Home;
