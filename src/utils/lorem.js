import * as lorem from 'lorem-ipsum'
//


export  function  fillwithLorem(object){
    Object.keys(object).map((key)=>{
        if(object[key]==""){
            object[key]=lorem({count: 4 ,units: 'words'})
        }
    })
    return object
}



      
    