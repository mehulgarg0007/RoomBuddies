import React, { useState } from 'react';
import './components2.css';
import { ImLinkedin } from 'react-icons/im';

// DeveloperCard component displays information about a developer
function DeveloperCard({ image, name, title, description, linkedin }) {
  // State to track whether to show the developer's description
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="developer-card"
      onMouseOver={() => setShowDescription(true)}  // Show description on mouse over
      onMouseOut={() => setShowDescription(false)}  // Hide description on mouse out
    >
      <img src={image} alt={name} />

      {/* Developer's Description */}
      <div className={showDescription ? 'description show' : 'description'}>
        <h3 style={{ textAlign: 'center' }}>{name}</h3>  {/* Center-align developer's name */}
        <p style={{ textAlign: 'center' }}>{title}</p>  {/* Center-align developer's title */}
        <p style={{ textAlign: 'center' }}>{description}</p>  {/* Center-align developer's description */}
        
        {/* LinkedIn Link */}
        <a 
          href={linkedin} 
          target="_blank"  // Open the link in a new tab
          rel="noopener noreferrer"  // Necessary for security to prevent external links from manipulating the opening tab
          style={{ textDecoration: 'none', color: 'rgba(135, 206, 235)', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <ImLinkedin style={{ marginRight: '5px' }} />
          {name}'s Linkedin
        </a>
      </div>
    </div>
  );
}

export default DeveloperCard;
