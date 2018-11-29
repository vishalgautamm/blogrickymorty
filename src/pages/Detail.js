import React, { Component,Fragment } from 'react';
import {getCharacters} from './../utils/api'
import {fillwithLorem} from './../utils/lorem'
import DetailReview from './../components/DetailReview'


class Detail extends Component {
    constructor(props){
        super(props)
        this.state={            
            detail: {},
            loading:false
        }
    }

    async componentDidMount() {
        this.setState({loading:true})
        let response = await getCharacters(this.props.match.params.id)        
        response.data.origin=response.data.origin.name
        response.data.location=response.data.location.name
        response= fillwithLorem(response.data) 
        console.log(response)            
        this.setState({detail:response,loading:false})
    }
        
    render() {  
        const loading = this.state.loading;
        let result 

        if (loading==true){
            result = <div className="lds-facebook"><div></div><div></div><div></div></div>
        }else{
            result = <DetailReview data={this.state.detail}></DetailReview>
        }     
        return (
                <Fragment>
                  {result}    
                </Fragment>          
        );
    }
}
export default Detail;