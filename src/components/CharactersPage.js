import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';

class CharactersPage extends Component {

    printImages(){
        let images =this.props.data       
        return images.map((elm,index)=>
        <Link to={`detail/${elm.id}`}>
            <img className="col-md-2 col-sm-6 mt-4" key={index} src={elm.url} >
            </img>
        </Link>)
    } 
    
    render() {
        return (
            <Fragment className="row">
                {this.printImages()}
            </Fragment>
        );
    }
}

export default CharactersPage;
