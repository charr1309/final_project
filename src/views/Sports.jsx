import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Sports extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Sports Stadium" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
                    <h1>Sports Schedules Pre-Printed Postcards</h1>
                    <p>They'll keep it on the fridge, which means they'll keep your information. We annually print schedules for Atlanta and Georgia's favorite sports teams. Customize with your information on the front and back.</p>
                    <ul>
                        <li>Atlanta Braves</li>
                        <li>Atlanta Hawks</li>
                        <li>Falcons, Bulldogs, and Yellow Jackets</li>
                    </ul>
                    <p>Pricing: Click here.</p>
                </div>
            </FadeIn>
        )
    }
}