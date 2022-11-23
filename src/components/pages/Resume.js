import React from 'react';
import IvaResume from '../../images/IVA.png';
import IvaResumePdf from '../IVA.pdf';

export default function Resume() {
  return (
    <div className="projectscontent">
      <h1>Resume</h1>
      <div>
        <a href={IvaResumePdf} download>
          Download Link
        </a>
      </div>
      <img id="ivaresume" src={IvaResume} />
    </div>
  );
}
