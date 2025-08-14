import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class FullColor extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Professional Custom Postcards for your Business</h1>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', marginBottom: '20px', width: '100%', maxWidth: '1200px', margin: '0 auto'}}>
                        <div style={{flex: '1'}}>
                            <h3>Create the right image for your business with our customized postcards</h3>
                            <p>Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com</p>
                            <p>Included in the price:</p>
                            <ul>
                                <li>90 minutes FREE graphic design</li>
                                <li>Full color, both sides</li>
                                <li>100 lbs. postcard stock</li>
                            </ul>
                            <p>Pricing: Click here.</p>
                            <h3>A few samples of our work. Click image to enlarge</h3>
                        </div>
                        <div style={{position: 'relative', minWidth: '500px', height: '350px'}}>
                            {/* Overlapping cascade layout */}
                            <img 
                                src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Custom Postcard Design" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '30px', left: '30px', transform: 'rotate(-8deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Custom Postcard Design 2" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '60px', left: '80px', transform: 'rotate(6deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Custom Postcard Design 3" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '90px', left: '130px', transform: 'rotate(-12deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Custom Postcard Design 4" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '120px', left: '180px', transform: 'rotate(10deg)'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}