import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Holiday extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Seasonal Pre-Printed Postcards</h1>
                    <div style={{display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '20px', width: '100%'}}>
                        <div style={{position: 'relative', minWidth: '450px', height: '300px'}}>
                            {/* Grid layout */}
                            <img 
                                src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Holiday Postcard" 
                                style={{width: '200px', height: '130px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '20px', left: '20px', transform: 'rotate(8deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Holiday Postcard 2" 
                                style={{width: '200px', height: '130px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '20px', left: '240px', transform: 'rotate(-5deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1303095/pexels-photo-1303095.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Holiday Postcard 3" 
                                style={{width: '200px', height: '130px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '160px', left: '20px', transform: 'rotate(-12deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1303099/pexels-photo-1303099.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Holiday Postcard 4" 
                                style={{width: '200px', height: '130px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '160px', left: '240px', transform: 'rotate(15deg)'}}
                            />
                        </div>
                        <div style={{flex: '1'}}>
                            <h2>Cards for every major holiday! See our gallery below.</h2>
                            <p>Choose a postcard from our gallery below or create a professional custom postcard</p>
                            <p>Also see our monthly calendar postcards</p>
                            <p>Pricing: Click here.</p>
                            <p>Order now:<br />
                                By phone - 404.849.6139 · By email - info@mrpostcard.com</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}