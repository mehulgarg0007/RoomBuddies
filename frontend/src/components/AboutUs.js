// Importing necessary dependencies and components
import React from 'react';
import './components2.css';
import Navbar from './navbar';
import Footer from './footer';
import House1 from './assets/images/House1.png';
import House2 from './assets/images/House2.png';
import Mehul from './assets/images/Mehul.png';
import Navam from './assets/images/Navam.jpg';
import priyanshu from './assets/images/priyasnhu.png';
import DeveloperCard from './DeveloperCard';

// Creating the AboutUs functional component
function AboutUs() {
    return (
        <>
            {/* Include the Navbar component */}
            <Navbar />

            {/* About Us Section */}
            <div className="about-us">
                <h1 style={{ color: 'rgba(31,72,125,1)' }}>About Us</h1>
                <hr />

                {/* Introduction */}
                <p>
                    Room-buddies is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by
                    Location with Specific requirements. Currently launched in Prayagraj and major cities in Uttar Pradesh, with plans for expansion.
                </p>
                <br />

                {/* Who We Are Section */}
                <div className="who-we-are">
                    <hr />
                    <img className="image-1" src={House1} alt="house-image" />
                    <h2 className="heading-1" style={{ color: 'rgba(31,72,125,1)' }}>Who we are?</h2>
                    <p>
                        We are a platform connecting homeowners willing to open their homes to guests with people seeking comfortable stays. We prioritize safety and careful filtering to benefit both parties.
                    </p>
                </div>
                <hr />
                <br />

                {/* What We Do Section */}
                <div className="what-do-we-do">
                    <img className="image-2" src={House2} alt="house-image" />
                    <h2 className="heading-2" style={{ color: 'rgba(31,72,125,1)' }}>What do we do?</h2>
                    <p>
                        We compile a list of PG stays based on homeowner listings, ensuring safety for both guests and hosts. Our site allows easy searches based on locality, budget, and other filters.
                    </p>
                </div>
                <br />

                {/* Our Aim Section */}
                <div className="our-aim">
                    <h2 className="heading-3" style={{ color: 'rgba(31,72,125,1)' }}>What are we aiming at?</h2>
                    <p>
                        Our aim is to provide guests with a PG that feels like home and matches their needs, while also connecting homeowners with suitable guests. We focus on detailed verification and real-time updates for a secure experience.
                    </p>
                </div>

                {/* Our Aspiring Team Section */}
                <h2 style={{ marginLeft: '40%', paddingTop: '10%', color: 'rgba(31,72,125,1)', fontSize: '1.8rem' }}>Our Aspiring Team</h2>
                <div className="developers-section">
                    {/* Developer Cards */}
                    <DeveloperCard
                        image={Mehul}
                        name="Mehul Garg"
                        title="Web Developer"
                        description="Pre-Final year student at Motilal Nehru National Institute Of Technology Allahabad
                                     Branch:- Electronics & Communication Engineering"
                        linkedin='linkedin.com/in/mehul-garg-829b00242'
                    />
                    <DeveloperCard
                        image={Navam}
                        name={'Navam Gupta'}
                        title="Web Developer"
                        description="Pre-Final year student at Motilal Nehru National Institute Of Technology Allahabad
                                     Branch:- Computer Science Engineering"
                        linkedin='https://www.linkedin.com/in/navam-gupta-667709251/'
                    />
                    <DeveloperCard
                        image={priyanshu}
                        name="Priyanshu Mishra"
                        title="Web Developer"
                        description="Pre-Final year student at Motilal Nehru National Institute Of Technology Allahabad
                                     Branch:- Computer Science Engineering"
                        linkedin='https://www.linkedin.com/in/priyanshu5656/'
                    />
                </div>
            </div>

            {/* Include the Footer component */}
            <Footer />
        </>
    );
}

// Export the AboutUs component
export default AboutUs;
