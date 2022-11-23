import React from 'react';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import instagram from '../images/instagram.png';

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/ivaradic/">
        <img id="linkedin" src={linkedin} />
      </a>
      <a href="https://github.com/Iva416">
        <img id="github" src={github} />
      </a>
      <a href="https://www.instagram.com/iva416x/?hl=en">
        <img id="instagram" src={instagram} />
      </a>
    </div>
  );
}
