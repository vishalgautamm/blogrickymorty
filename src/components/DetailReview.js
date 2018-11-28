import React, { Component } from 'react';

class DetailReview extends Component {
    

    print=() => {
        let obj =this.props.data        
        let {image,name,status,species,type,gender,origin,location}=obj
        let pronoun= (gender=="Male")? "he": (gender=="Female")? "she": "it"
        return (
            <div>
                <img src={image}></img>
                <p>
                    {`This is ${name} a ${gender} ${species} 
                    he was born at ${origin} planet his type is ${type}.
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
