import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';
import {Link} from 'react-router-dom';

const Header = (props) => {
    
    const {title, url} = props;
 
    return (
        <header className="App-header">
            
            <a href={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>

            <h1 style={{marginRight: 450}}>{title}</h1>

            <Link className="App-links" to={`/`}>Home</Link>
            <Link className="App-links" to={`/about`}>About</Link>
            <Link className="App-links" to={`/notes`}>Notes</Link>
            <Link className="App-links" to={`/contact`}>Contact</Link>

        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default Header;