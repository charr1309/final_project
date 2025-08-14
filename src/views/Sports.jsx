import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Sports extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Sports Schedules Pre-Printed Postcards</h1>
                    <div style={{display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '20px', width: '100%'}}>
                        <div style={{flex: '1'}}>
                            <p>They'll keep it on the fridge, which means they'll keep your information. We annually print schedules for Atlanta and Georgia's favorite sports teams. Customize with your information on the front and back.</p>
                            <ul>
                                <li>Atlanta Braves</li>
                                <li>Atlanta Hawks</li>
                                <li>Falcons, Bulldogs, and Yellow Jackets</li>
                            </ul>
                            <p>Pricing: Click here.</p>
                        </div>
                        <div style={{position: 'relative', minWidth: '450px', height: '300px'}}>
                            {/* Stacked deck layout */}
                            <img 
                                src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Sports Schedule Postcard" 
                                style={{width: '240px', height: '150px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '20px', left: '20px', transform: 'rotate(-3deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Sports Schedule Postcard 2" 
                                style={{width: '240px', height: '150px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '35px', left: '35px', transform: 'rotate(2deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Sports Schedule Postcard 3" 
                                style={{width: '240px', height: '150px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '50px', left: '50px', transform: 'rotate(-1deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Sports Schedule Postcard 4" 
                                style={{width: '240px', height: '150px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '65px', left: '65px', transform: 'rotate(4deg)'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}