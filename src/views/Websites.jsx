import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Websites extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Website Design" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
                    <h1>Custom Website Design and Web Hosting</h1>
                    <h3>Don't fall victim to bad cookie-cutter websites made with the templates, giving you very little control over your image. Create a custom website and host it for only $500.</h3>
                    <p>Order Now - By phone - 404.849.6129 By email - info@mrpostcard.com</p>
                    <p>Pricing: Click here.</p>
                    <p>A few samples of our work--Click image to visit the sites</p>
                </div>
            </FadeIn>
        )
    }
}