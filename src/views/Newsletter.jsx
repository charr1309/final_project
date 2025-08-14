import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class Newsletter extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Custom Flyers, Newsletters, Folders, Etc.</h1>
                    <div style={{display: 'flex', alignItems: 'center', gap: '40px', marginBottom: '20px', width: '100%'}}>
                        <div style={{flex: '1'}}>
                            <h2>We're more than just postcards. We can help you create a custom flyer, newsletter, folder, etc. To the right is one of the customized pocket folders we've done - stay tuned for more samples.</h2>
                            <p>Order Now - By phone - 404.849.6139 By email - info@mrpostcard.com</p>
                            <p>Pricing: Click here.</p>
                        </div>
                        <div style={{position: 'relative', minWidth: '450px', height: '300px'}}>
                            {/* Diagonal stack layout */}
                            <img 
                                src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Design" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '20px', left: '20px', transform: 'rotate(-15deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Design 2" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '60px', left: '80px', transform: 'rotate(-5deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Design 3" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '100px', left: '140px', transform: 'rotate(5deg)'}}
                            />
                            <img 
                                src="https://images.pexels.com/photos/1591058/pexels-photo-1591058.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Design 4" 
                                style={{width: '220px', height: '140px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 6px 12px rgba(0,0,0,0.3)', position: 'absolute', top: '140px', left: '200px', transform: 'rotate(15deg)'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}