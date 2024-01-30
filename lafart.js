//let gamePlay = 'y'
//while(gamePlay === 'y'){
    let userAnswers = []
    let correctAnswers = []
    function getRandomInt() {
        return Math.floor(Math.random() * (32 - 9 + 1) + 9);
    }
    const URL = `https://opentdb.com/api.php?amount=10&category=${getRandomInt()}&type=multiple`
    async function getData(URL){  
        try{
            let response = await fetch(URL)
            let awaitJSON = await response.json()
            console.log(awaitJSON)
            for(i=0; i < awaitJSON.results.length; i++){
                
                let userAns = prompt(awaitJSON.results[i].question)
                userAnswers.push(userAns)
                function shuffle(array){
                    array.sort(() => Math.random() - .50);
                }                  
                let arr = [awaitJSON.results[i].incorrect_answers.forEach((result)=> result), awaitJSON.results[i].correct_answer];
                console.log(arr)
                correctAnswers.push(awaitJSON.results[i].correct_answer)
            }
            console.log(userAnswers,correctAnswers)
            //gamePlay === 'n'
        }catch(error){

        }
    }
    getData(URL)
//}
