import React, { Component } from 'react';
import {getCharacters} from './../utils/api'
import {fillwithLorem} from './../utils/lorem'
import DetailReview from './../components/DetailReview'


class Detail extends Component {
    constructor(props){
        super(props)
        this.state={            
            detail: {}
        }
    }

    async componentDidMount() {
        let response = await getCharacters(this.props.match.params.id)        
        response.data.origin=response.data.origin.name
        response.data.location=response.data.location.name
        response= fillwithLorem(response.data) 
        console.log(response)            
        this.setState({detail:response})
    }
        
    render() {       
        return (
                <DetailReview data={this.state.detail}></DetailReview>                
        );
    }
}
export default Detail;