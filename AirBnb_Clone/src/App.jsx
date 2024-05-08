/*APP Description
--------------------
App has three parts: Navbar, Hero(Banner), Cards
*/


import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import Data from "./components/Data"

export default function App() {
            // <Hero />
    const cards = Data.map(item => {
        return (
            <Card 
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
                openSpots={item.openSpots}
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}