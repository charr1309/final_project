import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Calender extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Calendar and Events" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
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