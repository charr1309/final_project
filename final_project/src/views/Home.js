import React, {Component} from 'react';
import headerImage from "../headerImage.png";

class Home extends Component {
    render () {
        return(
            <div>
                <div>
                    <img src={headerImage} />
                </div>
            </div>
        )
    }
}
export default Home;