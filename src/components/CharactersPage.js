import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';

class CharactersPage extends Component {

    printImages(){
        let images =this.props.data       
        return images.map((elm,index)=>
        <Link to={`detail/${elm.id}`}>
            <img key={index} src={elm.url} >
            </img>
        </Link>)
    } 
    
    render() {
        return (
            <Fragment >
                {this.printImages()}
            </Fragment>
        );
    }
}

export default CharactersPage;
