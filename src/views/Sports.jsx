import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Sports extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Sports Schedules Pre-Printed Postcards</h1>
                    <p>They'll keep it on the fridge, which means they'll keep your information. We annually print schedules for Atlanta and Georgia's favorite sports teams. Customize with your information on the front and back.</p>
                    <ul>
                        <li>Atlanta Braves</li>
                        <li>Atlanta Hawks</li>
                        <li>Falcons, Bulldogs, and Yellow Jackets</li>
                    </ul>
                    <p>Pricing: Click here.</p>
                    <div style={{position: 'relative', textAlign: 'center', marginTop: '30px'}}>
                        <img 
                            src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Sports Schedule Postcard" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(-2deg)', display: 'inline-block'}}
                        />
                        <img 
                            src="https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Sports Schedule Postcard 2" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '20px', left: '50%', marginLeft: '-120px', transform: 'rotate(4deg)'}}
                        />
                        <img 
                            src="https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Sports Schedule Postcard 3" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '40px', left: '50%', marginLeft: '-110px', transform: 'rotate(-1deg)'}}
                        />
                    </div>
                </div>
            </FadeIn>
        )
    }
}