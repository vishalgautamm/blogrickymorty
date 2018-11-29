import axios from 'axios';
import {PATH_BASE,PATH_CHARACTERS,TOTAL_CHARACTERS_IDS} from '../config/constants';



export function threeRandom() {
  let min = 1 
  let random1 = parseInt(Math.random() * (TOTAL_CHARACTERS_IDS-min) + min );
  let random2 = parseInt(Math.random() * (TOTAL_CHARACTERS_IDS-min) + min );
  let random3 = parseInt(Math.random() * (TOTAL_CHARACTERS_IDS-min) + min );
  return {random1,random2,random3};
}

export function  getCharacters(...ids) {  
  return axios({
    method: 'get',
    url: `${PATH_BASE}${PATH_CHARACTERS}/${ids}`,    
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      }
  });  
}

export async function getHomeImages(){
 let ids = threeRandom()
 console.log(ids) 
 let response =await getCharacters([ids.random1,ids.random2,ids.random3]) 
 let images = response.data.map((element)=>element.image)
 return images 
}


// tendremos un grid de 18 imagenes 6 * 3 

export async function getCharactersByPage(pagenumber){
  let ids=[]
  let firstid= 1 +((pagenumber-1)*18)
  let lastid = 18 +((pagenumber-1)*18)
  for (let i=firstid; i<=lastid ;i++){
    ids.push(i)
  }  
  let response =await getCharacters(ids)  
  let data = response.data.map((elm)=>{return ({id:elm.id,url:elm.image})}) 
  return data
 }


