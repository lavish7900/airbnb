import React from 'react'
import "./Home.css"
import Banner from "./Banner"
import cardinfo from "./cardinfo"
import Card from "./Card"
function Home() {
    return (
        <div className="home">
        <Banner />
            <div className="home__info">
            {cardinfo.map((c)=> <Card
                    key={c.id}
                    src={c.src}
                    description={c.description}
                    title={c.title}
                    price={c.price}
                />)          
            
            }
            </div>
            
        </div>
    )
}

export default Home
