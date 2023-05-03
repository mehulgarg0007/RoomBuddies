import React, { useState } from 'react';
import './components2.css'
import {ImLinkedin} from 'react-icons/im'

function DeveloperCard({ image, name, title, description , linkedin}) {
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div
      className="developer-card"
      onMouseOver={() => setShowDescription(true)}
      onMouseOut={() => setShowDescription(false)}
    >
      <img src={image} alt={name} />
      <div className={showDescription ? 'description show' : 'description'}>
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
        <a href={linkedin} style={{textDecoration:'none',color:'rgba(135, 206, 235)',textAlign:'center'}}><ImLinkedin/>{name} Linkedin</a>
      </div>
    </div>
  );
}

export default DeveloperCard ;
