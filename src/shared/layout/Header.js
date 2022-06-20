import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/Chunchomin.png';
import {Link} from 'react-router-dom';

const Header = (props) => {
    
    const {url} = props;
 
    return (
        <header className="App-header">
            
            <div className="App-header-logo">
                <div href={url}>
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>José Fernando Jiménez Michel</h1>
                </div>
            </div>

            <ul>
                <li><Link to={`/`}>Curriculum Vitae</Link></li>
                <li><Link to={`/about`}>Portafolio</Link></li>
                <li><Link to={`/contact`}>Contacto</Link></li>
            </ul>

        </header>
    );
}

Header.propTypes = {
    url: PropTypes.string
}

export default Header;