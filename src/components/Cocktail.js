import React from 'react'
import {Link} from 'react-router-dom'
const Cocktail = ({id, name, image, glass, info})=>{
    return (
        <div className="card">
            <div className="image-container">
                <img src={image} alt={name}/>
            </div>
            <div className="card-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} >
                    details
                </Link>
            </div>

        </div>
    )
}

export default Cocktail