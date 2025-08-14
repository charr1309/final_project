import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Calender extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <div style={{position: 'relative', textAlign: 'center', marginBottom: '30px'}}>
                        <img 
                            src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Calendar Postcard" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(2deg)', display: 'inline-block'}}
                        />
                        <img 
                            src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Calendar Postcard 2" 
                            style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '15px', left: '50%', marginLeft: '-125px', transform: 'rotate(-3deg)'}}
                        />
                    </div>
                    <h1>Atlanta Events - Monthly Calendar Postcards</h1>
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
            </FadeIn>
        )
    }
}