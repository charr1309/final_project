import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

export default class SiteNewsletter extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <div>
                        <img 
                            src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                            alt="Newsletter Marketing" 
                            style={{width: '100%', height: '300px', objectFit: 'cover', marginBottom: '20px'}}
                        />
                        <h1>Newsletter & Marketing Resources:</h1>
                        <p>Your "home base" for broadening your marketing knowledge and honing your skills.</p>
                        <h2 className="highlight">Mr. Postcard Newsletter</h2>
                        <p>Receive our monthly eNews, filled with valuable articles, tips on direct mail, and other useful marketing strategies.</p>
                        <label htmlFor="SignUp">Sign up now! Its free!</label><br />
                        <input type="text" id="SignUp" name="SignUp" />
                        <button type="submit">Submit</button>
                        <h2 className="highlight">Articles - Direct mail and marketing advice from experts</h2>
                    </div>
                </div>
            </FadeIn>
        )
    }
}