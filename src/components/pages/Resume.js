import React from 'react';
import IvaResume from '../../images/IVA.png';
import IvaResumePdf from '../IVA.pdf';

export default function Resume() {
  return (
    <div className="resumecontent">
      <h1>Resume</h1>
      <a href={IvaResumePdf} download>
        Download Link
      </a>
      <div></div>
      <img id="ivaresume" src={IvaResume} />
    </div>
  );
}
