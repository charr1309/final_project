import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class Home extends Component {
    render() {
        return (
            <FadeIn>
                <div>
                    <div className="fade-in-image">
                        <img className="resize" src="/headerImage.png" alt='header' />
                    </div>
                </div>
            </FadeIn>
        )
    }
}
export default Home;