import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Holiday extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Seasonal Pre-Printed Postcards</h1>
                    <div style={{display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px'}}>
                        <div style={{position: 'relative', minWidth: '300px'}}>
                            <img 
                                src="https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Holiday Postcard" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(3deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1303098/pexels-photo-1303098.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Holiday Postcard 2" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '15px', left: '15px', transform: 'rotate(-2deg)'}}
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