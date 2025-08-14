import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Newsletter extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Custom Flyers, Newsletters, Folders, Etc.</h1>
                    <div style={{display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '20px'}}>
                        <div style={{flex: '1'}}>
                            <h2>We're more than just postcards. We can help you create a custom flyer, newsletter, folder, etc. To the right is one of the customized pocket folders we've done - stay tuned for more samples.</h2>
                            <p>Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com</p>
                            <p>Pricing: Click here.</p>
                        </div>
                        <div style={{position: 'relative', minWidth: '300px'}}>
                            <img 
                                src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Design" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', transform: 'rotate(-1deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Design 2" 
                                style={{width: '280px', height: '180px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', position: 'absolute', top: '15px', left: '15px', transform: 'rotate(2deg)'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}