import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class BusinessCards extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Business Cards" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
                    <h1>Custom BusinessCards</h1>
                    <h2>Full Color, both sides: Get 2,500 business cards for only $175.</h2>
                    <p>included in the price</p>
                    <ul>
                        <li>30 minutes FREE graphic design</li>
                        <li>Full color, both sides</li>
                        <li>100 lbs. card stock</li>
                    </ul>
                    <p>Pricing: Click here</p>
                    <p>A few samples of our work--Click image to enlarge</p>
                </div>
            </FadeIn>
        )
    }
}