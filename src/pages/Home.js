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

    printImages(){
        let images =this.state.images        
        return images.map((url,index)=><img key={index} src={url} className="col-md-4"></img>)
    }
    
    render() {
        return (
            <Fragment className="row container" >
                {this.printImages()}

                <div className="container">
                    <Link to="/characters">
                            <button className="btn btn-default mt-2  ">See more</button>
                    </Link>
                </div>
            </Fragment>
        );
    }
}

export default Home;