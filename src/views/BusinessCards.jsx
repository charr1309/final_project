import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class BusinessCards extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Custom BusinessCards</h1>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', marginBottom: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
                        <div style={{flex: '1'}}>
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
                        <div style={{position: 'relative', minWidth: '500px', height: '350px'}}>
                            {/* Spread layout */}
                            <img 
                                src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Business Card Design" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '40px', left: '20px', transform: 'rotate(-20deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Business Card Design 2" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '60px', left: '100px', transform: 'rotate(-5deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/6801647/pexels-photo-6801647.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Business Card Design 3" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '80px', left: '180px', transform: 'rotate(10deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/6802050/pexels-photo-6802050.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Business Card Design 4" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '100px', left: '260px', transform: 'rotate(25deg)'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}