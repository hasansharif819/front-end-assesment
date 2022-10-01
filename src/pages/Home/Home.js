import React from 'react';
import './Home.css';
import landing from '../../Assets/Landing page image.svg';
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <div className="subContainer">
            <div className='image-text'>
            <div className='firstBox'>
                <p className='Imagine'><span>Imagine If</span> <br /><span id='Snapchat'>Snapchat</span> <br /> <span>had events.</span></p>
            </div>
            <div className='content'>
                <p id='contentPara'>Easily host and share events with your <br /> friends across any social media.</p>
            </div>
            </div>
            <div className='landingPAge'>
                <img src={landing} alt=""/>
            </div>
            </div>
            <div id='buttonId'>
                <Link to='/create'><button id='buttonID'>🎉 Create my event</button></Link>
            </div>
        </div>
    );
};

export default Home;