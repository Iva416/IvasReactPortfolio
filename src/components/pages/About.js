import React from 'react';
import logo from '../../images/Logo2.png';
import Ivr from '../../images/IVR.png';

export default function About() {
  return (
    <div className="abouttext">
      <h1>Welcome to Iva Studios</h1>
      <img id="ivr" src={Ivr}></img>
      <p>
        Founded in 2022. Fueled by my love and passion for finding out how
        things work and how to fix it.
      </p>
      <img id="logo" src={logo}></img>
    </div>
  );
}
