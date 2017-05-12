import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var DATA = {
    searchText : 'cats',
    imagesList : []
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App  searchData = {DATA}/>, div);
});
