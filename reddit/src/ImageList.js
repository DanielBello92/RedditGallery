/**
 * Created by Daniel Bello16 on 5/9/2017.
 */
import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

class ImageList extends Component {
    constructor(props) {
        super(props);
    }

    renderArrowButtonName(){
       return(( this.props.imagesList.length > 0 )? "show-Button": "hidden-Button")
    }

    renderPageButtons(){
        let pagesButtons = [];
        for(let index = 0; index < (this.props.numOfImageBoxs / this.props.numOfImagesPerPage) ; index++) {
            pagesButtons = pagesButtons.concat((
                <div key={index} className={(this.props.pageNumber == index )? "active": "not-active"} onClick={()=> {
                    this.props.updatePageNumber(index)
                }}>
                    {index+1}
                </div>))
        }
        return pagesButtons;
    }


    render() {
        // console.log("In ImageList !")
        // console.log(this.props.imagesList)

        return (
            <div className="imageAndPageingLayout">
                <div className="imageTableBoxs">
                    {this.props.imagesList.map((image, index)=>{
                        if(index >= (this.props.pageNumber)*(this.props.numOfImagesPerPage) && index < (this.props.pageNumber+1)*(this.props.numOfImagesPerPage)){
                            return(
                                    <a  key={index} href={ "https://www.reddit.com"+ image.data.permalink} target="_blank">
                                        <img className="image" src={(image.data.thumbnail)? image.data.thumbnail : "http://www.bizexpert.in/supercat/noimagefound.png"}
                                             key={index} data-tip data-for={'image-tooltip'+index}/>
                                        <ReactTooltip id={'image-tooltip'+index} type='info' place="top">
                                            <span>{image.data.title}</span>
                                        </ReactTooltip>
                                    </a>
                                    )
                        }

                    })}
                </div>
                <div className="pageingButtons">
                    <button className={this.renderArrowButtonName()} id="prev" key="prev" onClick={()=>{
                        if(this.props.pageNumber-1 >= 0){
                            this.props.updatePageNumber((this.props.pageNumber-1));
                        }
                        else{
                            this.props.updatePageNumber(((this.props.numOfImageBoxs/this.props.numOfImagesPerPage)-1))
                        }

                    }}>{'<'}</button>
                    {
                        this.renderPageButtons()
                    }
                    <button className={this.renderArrowButtonName()} id="next" key="next" onClick={()=>{
                        if((this.props.pageNumber+1)*this.props.numOfImagesPerPage < this.props.numOfImageBoxs ){
                            this.props.updatePageNumber((this.props.pageNumber+1));
                        }
                        else{
                            this.props.updatePageNumber((0))
                        }
                    }}>{'>'}</button>
                </div>

            </div>

        );
    }
}

export default ImageList;