import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Newsletter extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <img 
                        src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Newsletter and Flyers" 
                        style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                    />
                    <h1>Custom Flyers, Newsletters, Folders, Etc.</h1>
                    <h2>We're more than just postcards. We can help you create a custom flyer, newsletter, folder, etc. To the right is one of the customized pocket folders we've done - stay tuned for more samples.</h2>
                    <p>Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com</p>
                    <p>Pricing: Click here.</p>
                </div>
            </FadeIn>
        )
    }
}