import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class RealEstate extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Real Estate Pre-Printed Postcards</h1>
                    <div style={{display: 'flex', alignItems: 'flex-start', gap: '30px', marginBottom: '20px'}}>
                        <div style={{flex: '1'}}>
                            <h2>Mail 100 pre-printed postcards for just $75, all costs included.</h2>
                            <p>Choose a postcard from our gallery below or create a professional custom postcard.</p>
                            <p>Are you a broker? Ask about how we can help your whole office to mail pre-printed postcards at a discounted rate.</p>
                            <p>Pricing: Click here.</p>
                            <p>Order now:<br />
                                By phone - 404.849.6139 · By email - info@mrpostcard.com</p>
                        </div>
                        <div style={{position: 'relative', minWidth: '300px'}}>
                            <img 
                                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Real Estate Postcard" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(-2deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Real Estate Postcard 2" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '15px', left: '15px', transform: 'rotate(3deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Real Estate Postcard 3" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '30px', left: '30px', transform: 'rotate(-1deg)'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}