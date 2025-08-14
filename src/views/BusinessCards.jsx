import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class BusinessCards extends Component {
    render() {
        return (
            <FadeIn>
                <div>
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
                    <div style={{position: 'relative', textAlign: 'center', marginTop: '30px'}}>
                        <img 
                            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Business Card Design" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(1deg)', display: 'inline-block'}}
                        />
                        <img 
                            src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Business Card Design 2" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '15px', left: '50%', marginLeft: '-125px', transform: 'rotate(-2deg)'}}
                        />
                    </div>
                </div>
            </FadeIn>
        )
    }
}