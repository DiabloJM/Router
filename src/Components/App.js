import React from 'react';
import Header from '../shared/layout/Header';
import './App.css';
import Content from '../shared/layout/Content';
import Popup from 'reactjs-popup';

import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Header title="Routes"/>
      <Content >
        {props.children}
      </Content>
      <Popup/>
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
