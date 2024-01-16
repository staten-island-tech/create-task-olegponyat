const DOMSelectors = {

}
function getRandomInt() {
    return Math.floor(Math.random() * (32 - 9 + 1) + 9);
}
const URL = `https://opentdb.com/api.php?amount=10&category=${getRandomInt()}&type=multiple`
async function getData(URL){
    
    try{
        let response = await fetch(URL)
        let awaitJSON = await response.json()
        console.log(awaitJSON)
        
        awaitJSON.results.forEach((el)=>{
            console.log(el.question,el.correct_answer)
        })
    }catch(error){

    }
}
getData(URL)