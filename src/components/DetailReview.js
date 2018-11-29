import React, { Component } from 'react';

class DetailReview extends Component {
    

    print=() => {
        let obj =this.props.data        
        let {image,name,status,species,type,gender,origin,location}=obj
        let pronoun= (gender==="Male")? "he": (gender==="Female")? "she": "it"

    return (
        <div className="row mt-4 border border-white rounded" >
            <img className="col-md-4" src={image}></img >
            <p className="mt-4 col-md-8">
                {`This is ${name} a ${gender} ${species} 
                ${pronoun} was born at ${origin} planet his type is ${type}.
                ${pronoun} is ${status} at the moment and is located at ${location}`} 
            </p>
        </div>
    );
    }
   

    render() {
       return (<div>{this.print()}</div>)
    }
}

export default DetailReview;
