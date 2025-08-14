import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class FullColor extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <div style={{position: 'relative', textAlign: 'center', marginBottom: '30px'}}>
                        <img 
                            src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Custom Postcard Design" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(-1deg)', display: 'inline-block'}}
                        />
                        <img 
                            src="https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Custom Postcard Design 2" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '20px', left: '50%', marginLeft: '-130px', transform: 'rotate(2deg)'}}
                        />
                        <img 
                            src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Custom Postcard Design 3" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '40px', left: '50%', marginLeft: '-120px', transform: 'rotate(-3deg)'}}
                        />
                    </div>
                    <h1>Professional Custom Postcards for your Business</h1>
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
            </FadeIn>
        )
    }
}