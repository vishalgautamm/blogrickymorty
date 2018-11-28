import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CharactersPage extends Component {
    
    
   
    printImages(){
        let images =this.props.data
       
        return images.map((elm,index)=><Link to={`detail/${elm.id}`}><img key={index} src={elm.url} className="col-md-2"></img></Link>)
    } 
    
    render() {
        return (
            <div className="container" >
                {this.printImages()}
            </div>
        );
    }
}

export default CharactersPage;
