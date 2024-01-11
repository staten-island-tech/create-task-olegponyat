const DOMSelectors = {

}
const URL = 'https://opentdb.com/api.php?amount=10&type=multiple'
async function getData(URL){
    
    try{
        let response = await fetch(URL)
        let awaitJSON = await response.json()
        console.log(awaitJSON)
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
        awaitJSON.results.forEach((el)=>{
            console.log(el.question,el.correct_answer)
        })
    }catch(error){

    }
}
getData(URL)