import React from 'react'
import "./navigate.css";

const Florida = () => {
    return (
       <div class="FloridaBody">
          
            <main>
                    <div className="hero">
                        <p className="beaches">BEACHES | MOUNTAIN | ACTIVITIES</p>
                        <h1 className="main-header">Explore the beauty of nature Discover the new you.</h1>
                        <h4 className="main-subtext">
                            Let's start your journey with us, Let your dream come 
                            true with amazing travel destinations, acitivities and more.
                        </h4>
                        <div className="explore-btn">
                        <button className="main-btn">Explore Destinations</button>
                        </div>
                    </div>

                    <div style={{width: "90%", margin: "auto"}}>
                        <div className="sec2-bg">
                            <div className="sec2-sub">
                            <div>
                            <p>Accomodation</p>
                            <p>Barcelonia,Spain</p>
                            </div>

                            <div>
                            <p>Check-in</p>
                            <p>21.05.2022</p>
                            </div>

                            <div>
                            <p>Check-out</p>
                            <p>21.10.2022</p>
                            </div>

                            <div>
                            <p>Guest</p>
                            <p>2 adults</p>
                            </div>

                            <button className="sec3-btn">Search</button>
                            </div>
                        
                        </div>
                    </div>
            </main>
        
        </div>
    )
}

export default Florida
