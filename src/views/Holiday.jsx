import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Holiday extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Holiday Decorations" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
                    <h1>Seasonal Pre-Printed Postcards</h1>
                    <h2>Cards for every major holiday! See our gallery below.</h2>
                    <p>Choose a postcard from our gallery below or create a professional custom postcard</p>
                    <p>Also see our monthly calendar postcards</p>
                    <p>Pricing: Click here.</p>
                    <p>Order now:<br />
                        By phone - 404.849.6139 · By email - info@mrpostcard.com</p>
                </div>
            </FadeIn>
        )
    }
}