import React from 'react' ;
import './components2.css'
import Navbar from './navbar'
import Footer from './footer'
import House1 from './assets/images/House1.png'
import House2 from './assets/images/House2.png'
import Mehul from './assets/images/Mehul.png'
import Navam from './assets/images/Navam.png'
import priyanshu from './assets/images/priyasnhu.png'

function AboutUs(){
    return(
        <>
            <Navbar/>
            <div className="about-us">
                <h1 style={{color: 'rgba(31,72,125,1)'}}>About Us</h1>
                <hr/>
                <p >
                    Room-buddies is a technology-based platform for Booking PG, Serviced Apartments, Shared Flat and Rooms by
                    Location with Specific requirement by filtering by Location, Price, Room type,
                    Amenities and Gender. Presently we have Launched in Platform in Prayagraj and other major cities in Uttar Pradesh. We
                    will soon expand to all the Major Cities of the Country. 
                </p>
        
                <div className="who-we-are">
                    
                    <hr/>
                    <img className="image-1" src={House1} alt="house-image"/>
                    <h2 class="heading-1">Who we are?</h2>
                    <p>We are a set of well-selected and chosen Paying Guest services. This is a platform where those, who are
                        willing to open their homes to guests, meet the people looking for wonderful homes to stay in and not
                        have to look for hotels or favors in any city for their long stays. We ensure the places listed and the
                        people looking for a stay are selected based on careful filtering criteria so that both parties benefit
                        and the safety of all involved persons is ensured. We know how important a safe home is to you at both
                        ends of the deal and that is a promise we make.
                    </p>
                </div>
                <hr/>
                <div className="what-do-we-do">
                    
                    
                    <img className="image-2" src={House2} alt="house-image"/>
                    <h2 className="heading-2">What do we do?</h2>
                    <p >We put together a list of places where our guests can stay as a PG. This is done based on listings on our
                        site by homeowners. We ensure that not only are they a safe home for the guest but the guest too is safe
                        for them. These places can be searched based on locality, budget, need, and multiple other filters. Find
                        the perfect PG stay or guest with us.
        
                        To meet our aim, we eliminate the two major problems a guest or host may face. The first of these is a
                        lack of information for anyone new in a city. Our site will list all the information you can seek not
                        just about the house and homeowners but also the locality and other aspects. The other is the loss of
                        capital to a host when a paying guest leaves. We do not wish our homeowners and makers to lose money
                        waiting for the next stroke of luck and therefore listing with us helps them find a guest sooner.
                    </p>
                </div>
                <hr/>
                <div className="our-aim">
                    <h2 className="heading-3">What are we aiming at?</h2>
                    <p>What are we aiming at?
                        Our aim and motto are simple and singular. To provide the guests with a PG that feels like home best
                        fitting their needs and the homeowners a guest who fits right in. To attain this we work with homeowners
                        and guests to give everyone involved the best possible experience.
        
                        Our method of arriving at this involves detailed verification of all parties, a good database of homes
                        and guests and being updated in real-time ensuring there is no problem for either party to find the
                        right person/ home sitting where they are from their systems.
        
                        So come together home makers/ owners and guests to find what you seek. We hope we will be able to give
                        you what you seek with us. We hope to make the PG community a secure one where all people get the best
                        out of the system.
                    </p>
                </div>
                <div className="our-team">
                    <h2 className="team-heading">OUR ASPIRING TEAM</h2>
                    <div className="mehul">
                        <img className="mehul-img" src={Mehul} alt="mehul-img"/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution
                            of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        
                    </div>
                    
                    <div className="navam">
                        <img className="navam-img" src={Navam} alt="navam-img"/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution
                            of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                      
                    </div>
                    
                    <div className="priyanshu">
                        <img className="priyanshu-img" src={priyanshu} alt="priyanshu-img"/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution
                            of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default AboutUs ;