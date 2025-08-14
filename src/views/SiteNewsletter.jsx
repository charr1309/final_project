import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

export default class SiteNewsletter extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <div>
                        <h1>Newsletter & Marketing Resources:</h1>
                        <p>Your "home base" for broadening your marketing knowledge and honing your skills.</p>
                        <h2 className="highlight">Mr. Postcard Newsletter</h2>
                        <p>Receive our monthly eNews, filled with valuable articles, tips on direct mail, and other useful marketing strategies.</p>
                        <label htmlFor="SignUp">Sign up now! Its free!</label><br />
                        <input type="text" id="SignUp" name="SignUp" />
                        <button type="submit">Submit</button>
                        <h2 className="highlight">Articles - Direct mail and marketing advice from experts</h2>
                        <div style={{position: 'relative', textAlign: 'center', marginTop: '30px'}}>
                            <img 
                                src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1" 
                                alt="Newsletter Marketing" 
                                style={{width: '350px', height: '220px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', display: 'inline-block'}}
                            />
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    }
}