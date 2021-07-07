import React from 'react'
import "./Result.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
function Result({
    img,
    location,
    title,
    description,
    star,
    price,
    total
}) {
    return (
        <div className="result">
            <img src={img} alt="" />
            

            <div className='result__info'>
                <div className="result__infoTop">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="result__infoBottom">
                    <div className="result__stars">
                        <StarIcon className="result__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='results__price'>
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
            <FavoriteBorderIcon className="result__heart" />
        </div>
    )
}

export default Result
