import React, { Component,Fragment } from 'react';
import {getCharactersByPage} from './../utils/api'
import CharacterPage from './../components/CharactersPage';

class Characters extends Component {

    constructor(props){
        super(props)
        this.state={
            data:[],
            page:1
        }
    }
        
    componentDidMount() {
        this.getCharactersImages()
      }

    async getCharactersImages(){
        let response = await getCharactersByPage(this.state.page)        
        this.setState({data:response})
      }

    nextPage=()=>{
        if(this.state.page==19){return null} //limite para numero maximo de paginas
        let newpage = this.state.page +1        
        this.setState({page:newpage},()=>{this.getCharactersImages()})
        
    }
    lastPage=()=>{
        if(this.state.page==1){return null}//limite para numero minimo de paginas
        let newpage = this.state.page -1
        this.setState({page:newpage},()=>{this.getCharactersImages()})
    }    
   
    render() {
        return (
            <Fragment>
            <CharacterPage data={this.state.data}></CharacterPage>            
            <button onClick={this.lastPage}>Last</button>
            <button onClick={this.nextPage}>Next</button>
            </Fragment>
        );
    }
}

export default Characters;