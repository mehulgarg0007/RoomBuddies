import { useState } from "react";


function Card({name, image,property_address,contact,removePgs})  {
    const[readmore,setReadmore] = useState(false);
    
    const description = readmore ? property_address :`${property_address.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }


    return (
        
        <div className="card">

            <img src={image} className="image"></img>

            <div className="pg-info">
                <div className="pg-details">
                    <h4 className="pg-price"> {contact}</h4>
                    <h4 className="pg-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removePgs(name)}>
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;