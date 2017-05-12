/**
 * Created by Daniel Bello16 on 5/9/2017.
 */

import React, { Component } from 'react';
// import {reddit} from 'reddit.js';
//import reddit from 'reddit.js';

class SubRedditSearch extends Component {

    constructor(props){
        super(props);
        this.state = {text: ""};
    }

    render() {

        console.log("SubRedditSearch in!")

        let reddit = window.reddit

        return (

            <div className="SearchComponent">

                <input className="searchTextBox" type="text" placeholder="Search SubReddit" onChange={(evt)=>{this.setState({text: evt.target.value})}}/>
                <button className="searchButton" onClick={()=>{

                    reddit.top(this.state.text).fetch((res,err)=> {
                        {/*console.log(res.data.children);*/}
                        this.props.updateImages(res.data.children);
                    });

                }}> Search </button>

            </div>

        )

    }
}

export default SubRedditSearch;