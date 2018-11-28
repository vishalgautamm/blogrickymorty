import React, { Component } from 'react';
import {getHomeImages} from './../utils/api'

class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    
    async componentDidMount() {
        let response = await getHomeImages()
        
        this.setState({data:response})
      }
    
    render() {
        return (
            <div>
                {this.state.data}
            </div>
        );
    }
}

export default Home;