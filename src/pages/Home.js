import React, {Fragment, Component } from 'react';
import {getHomeImages} from './../utils/api'
import { Link } from 'react-router-dom';


class Home extends Component {

    constructor(props){
        super(props)
        this.state={
            images:[],
            loading:false
        }
    }   
     
    async componentDidMount() {
        this.setState({loading:true})
        let response = await getHomeImages()        
        this.setState({images:response,loading:false})
    }

    printImages(){
        let images =this.state.images        
        return images.map((url,index)=><img key={index} src={url} className="col-md-4"></img>)
    }
    
    render() {
        const loading = this.state.loading;
        let result 

        if (loading==true){
            result = <div className="lds-facebook"><div></div><div></div><div></div></div>
        }else{
            result = this.printImages()
        }
            
        return (
            <Fragment className="row container" >
                {result}

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