import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Home extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <h1>Welcome to Mr. Postcard</h1>
                    <p>Your premier destination for professional postcard services since 1996.</p>
                </div>
            </FadeIn>
        )
    }
}
export default Home;