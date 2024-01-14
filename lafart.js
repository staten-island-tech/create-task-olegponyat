function getRandomInt() {
    return Math.floor(Math.random() * (32 - 9 + 1)) + 9;
}
let URL = `https://opentdb.com/api.php?amount=10&category=${getRandomInt()}&type=multiple`
async function getData(URL){
    try{
        let response = await fetch(URL)
        let awaitJSON = await response.json()    
        let questionAnswered = false
        while(questionAnswered === false){
            console.log(awaitJSON)
            questionAnswered === true
        }
    }catch(error){

    }
}
getData(URL)