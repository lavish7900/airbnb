import React from 'react'
import "./Banner.css"
import {Button} from "@material-ui/core"
import { useState } from 'react'
import Datepicker from "./Datepicker"
import { useHistory } from 'react-router'
function Banner() {
    const history = useHistory();

    const [dateclick,setDateclick]= useState(true)
    return (
        <div className="banner">
           {dateclick===false && <Datepicker />} 
            <div className="banner__button">
            <Button onClick={()=>setDateclick(!dateclick)} 
            className="date" varient="outlined">{dateclick===true?"Set Date":"ok"}</Button>
    
            </div>
            <    div className="banner__info">
                <h2>
                    Enjoy your stay at Airbnb
                </h2>
                <p>life is beautiful enjoy every moment.</p>
                <Button onClick={()=>history.push("/search")} className="bannerInfo__button" varient="outlined">Explore Nearby</Button>

                </div>
        </div>
    )
}

export default Banner
