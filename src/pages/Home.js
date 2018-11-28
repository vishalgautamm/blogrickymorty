import React, {Fragment, Component } from 'react';
import {getHomeImages} from './../utils/api'
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            images:[]
        }
    }
    
    async componentDidMount() {
        let response = await getHomeImages()
        
        this.setState({images:response})
      }
    printImages(ï){
        let images =this.state.images
        //return images.map((url,index)=><CharacterImage src={url} key={index}></CharacterImage>)
        return images.map((url,index)=><img key={index} src={url} className="col-md-4"></img>)
    }
    
    render() {
        return (
            <div className="container" >
                {this.printImages()}
                <Link to="/characters"><button>See more</button></Link>
            </div>
        );
    }
}

export default Home;