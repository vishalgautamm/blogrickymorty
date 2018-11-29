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
        return (
            <Fragment>
                <CharacterPage data={this.state.data}></CharacterPage>            
                <div className="row col-md-12 mt-2 btn btn-default">
                    <button className="mr-2 btn btn-default" onClick={this.lastPage}>Last</button>
                    <button className="btn btn-default" onClick={this.nextPage}>Next</button>
                </div>
            </Fragment>
        );
    }
}

export default Characters;