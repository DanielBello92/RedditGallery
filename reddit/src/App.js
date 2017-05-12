import React, { Component } from 'react';
import SubRedditSearch from './SubRedditSearch';
import ImageList from './ImageList';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchText : '',
            numOfImageBoxs : 0,
            imagesList : [],
            pageNumber : 0,
            numOfImagesPerPage : 5
        }
    }

    _updateImageList = (images) => {

        this.setState({imagesList : images})
        this.setState({numOfImageBoxs : images.length})

    }

    _updatePageNumber = (pageNumber) => {

        this.setState({pageNumber : pageNumber})

    }

  render() {

    return (
      <div className="App-Layout">

          <SubRedditSearch className="App-Search" imagesList={this.state.imagesList}
                           updateImages={this._updateImageList}
                           numOfImageBoxs={this.state.numOfImageBoxs}/>
          <ImageList className="App-Images" imagesList={this.state.imagesList}
                                            numOfImageBoxs={this.state.numOfImageBoxs}
                                            pageNumber={this.state.pageNumber}
                                            numOfImagesPerPage={this.state.numOfImagesPerPage}
                                            updatePageNumber={this._updatePageNumber}/>


      </div>
    );

  }
}

export default App;
