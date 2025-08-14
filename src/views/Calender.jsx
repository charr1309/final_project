import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Calender extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Atlanta Events - Monthly Calendar Postcards</h1>
                    <div style={{display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '20px', width: '100%'}}>
                        <div style={{position: 'relative', minWidth: '450px', height: '300px'}}>
                            {/* Fan layout */}
                            <img 
                                src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Calendar Postcard" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '80px', left: '50px', transform: 'rotate(-25deg)', transformOrigin: 'bottom center'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Calendar Postcard 2" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '70px', left: '80px', transform: 'rotate(-10deg)', transformOrigin: 'bottom center'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Calendar Postcard 3" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '60px', left: '110px', transform: 'rotate(5deg)', transformOrigin: 'bottom center'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1591058/pexels-photo-1591058.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Calendar Postcard 4" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '50px', left: '140px', transform: 'rotate(20deg)', transformOrigin: 'bottom center'}}
                            />
                        </div>
                        <div style={{flex: '1'}}>
                            <h3>Some of the venues our cards include:</h3>
                            <ul>
                                <li>Fox Theater</li>
                                <li>High Museum of Art</li>
                                <li>Atlanta Symphony Orchestra</li>
                                <li>14th Street Playhouse</li>
                                <li>Kudzu Playhouse</li>
                                <li>Fernbank</li>
                                <li>Stone Mountain Park</li>
                                <li>Philips Arena</li>
                                <li>Gwinnett Arena and PAC</li>
                                <li>Sporting Events</li>
                            </ul>
                            <p>Base price: 25¢ for 9" x 6"<br />
                                Pricing: Click here.</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}