import React from 'react';
import logo from '../../images/Logo1.png';

export default function About() {
  return (
    <div className="abouttext">
      <h1>Welcome to Iva Studios</h1>
      <p>
        Founded in 2022. Fueled by my love and passion for finding out how
        things work and how to fix things.
      </p>
      <card>
        <img id="logo" src={logo}></img>
      </card>
    </div>
  );
}
