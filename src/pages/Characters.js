import React, { Component } from 'react';
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
        if(this.state.page==19){return null}
        let newpage = this.state.page +1
        
        this.setState({page:newpage},()=>{this.getCharactersImages()})
        
    }
    lastPage=()=>{
        if(this.state.page==1){return null}
        let newpage = this.state.page -1
        this.setState({page:newpage},()=>{this.getCharactersImages()})
    }
    
   
    render() {
        return (
            <div>
            <CharacterPage data={this.state.data}></CharacterPage>
            
            <button onClick={this.lastPage}>Last</button>
            <button onClick={this.nextPage}>Next</button>
            </div>

        );
    }
}

export default Characters;