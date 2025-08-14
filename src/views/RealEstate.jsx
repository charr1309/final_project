import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class RealEstate extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Real Estate Houses" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
                    <h1>Real Estate Pre-Printed Postcards</h1>
                    <h2>Mail 100 pre-printed postcards for just $75, all costs included.</h2>
                    <p>Choose a postcard from our gallery below or create a professional custom postcard.</p>
                    <p>Are you a broker? Ask about how we can help your whole office to mail pre-printed postcards at a discounted rate.</p>
                    <p>Pricing: Click here.</p>
                    <p>Order now:<br />
                        By phone - 404.849.6139 · By email - info@mrpostcard.com</p>
                </div>
            </FadeIn>
        )
    }
}