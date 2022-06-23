import React from "react";

function Productbox(props){
    return(
        <div className='products'>
            <div className='a-box'>
                <div className='a-b-img'>
                    <img src={props.image} alt=''/>
                </div>
                <div className='a-b-text'>
                    <h2>{props.title}</h2>
                    <button className='productbox-button'>Ver más</button>
                </div>
            </div>
        </div>

    )
}
export default Productbox