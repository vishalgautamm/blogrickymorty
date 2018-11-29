import React, { Component,Fragment } from 'react';
import {getCharactersByPage} from './../utils/api'
import CharacterPage from './../components/CharactersPage';

class Characters extends Component {

    constructor(props){
        super(props)
        this.state={
            data:[],
            page:1,
            loading:false
        }
    }
        
    componentDidMount() {
        this.getCharactersImages()
      }

    async getCharactersImages(){
        this.setState({loading:true})
        let response = await getCharactersByPage(this.state.page)               
        this.setState({data:response,loading:false})
      }

    nextPage=()=>{
        if(this.state.page==22){return null} //limite para numero maximo de paginas
        let newpage = this.state.page +1        
        this.setState({page:newpage},()=>{this.getCharactersImages()})
        
    }
    lastPage=()=>{
        if(this.state.page==1){return null}//limite para numero minimo de paginas
        let newpage = this.state.page -1
        this.setState({page:newpage},()=>{this.getCharactersImages()})
    }    
   
    render() {
        const loading = this.state.loading;
        let result 

        if (loading==true){
            result = <div className="lds-facebook"><div></div><div></div><div></div></div>
        }else{
            result =<div><CharacterPage data={this.state.data}></CharacterPage></div>  
        }
        return (
            <Fragment>
                
                <div>{result}  </div>       
                <button className="m-2 col-md-2 col-sm-4 btn btn-dark" onClick={this.lastPage}>Last</button>
                <button className="m-2 col-md-2 col-sm-4 btn btn-dark" onClick={this.nextPage}>Next</button>                
            
            </Fragment>
        );
    }
}

export default Characters;