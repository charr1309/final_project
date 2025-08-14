import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Newsletter extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <div style={{position: 'relative', textAlign: 'center', marginBottom: '30px'}}>
                        <img 
                            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                            alt="Newsletter and Flyer Design" 
                            style={{width: '450px', height: '280px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', display: 'inline-block'}}
                        />
                    </div>
                    <h1>Custom Flyers, Newsletters, Folders, Etc.</h1>
                    <h2>We're more than just postcards. We can help you create a custom flyer, newsletter, folder, etc. Above is one of the customized designs we've done - stay tuned for more samples.</h2>
                    <p>Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com</p>
                    <p>Pricing: Click here.</p>
                </div>
            </FadeIn>
        )
    }
}