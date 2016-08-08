/* eslint-disable no-console */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

var App = function(){
  return (
          <div>
           This is my app
           <SearchBar/>
         </div>
       )
};

ReactDOM.render(
  <App/> ,document.getElementById("app")
)
