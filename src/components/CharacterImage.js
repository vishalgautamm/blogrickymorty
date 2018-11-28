import React, { Component } from 'react';

class CharacterImage extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
            return (<div><img src={this.props.src}></img></div>)
        
    }
}

export default CharacterImage;
