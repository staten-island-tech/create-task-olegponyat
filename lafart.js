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

                let arr = []
                awaitJSON.results[i].incorrect_answers.forEach((answer)=> arr.push(answer))
                arr.push(awaitJSON.results[i].correct_answer)
                function shuffle(array){
                    array.sort(() => Math.random() - .50);
                }
                shuffle(arr)
                function setAnswers(){
                    for (let i = 0; i < Math.min(randomWordsArray.length, 4); i++) {
                        let currentLetter = String.fromCharCode('a'.charCodeAt(0) + i);
                        arr[i] = currentLetter + ': ' + randomWordsArray[i];
                    }
                }
                setAnswers()
                let userAns = prompt(`${awaitJSON.results[i].question}`)
                function getWordByLetter(letter) {
                    const letterMapping = {
                      'A': 0,
                      'B': 1,
                      'C': 2,
                      'D': 3
                    };
                  
                    const index = letterMapping[letter.toUpperCase()];
                    return arr[index];
                }
                userAnswers.push(getWordByLetter(userAns))
                correctAnswers.push(awaitJSON.results[i].correct_answer)
                
            }
            console.log(userAnswers,correctAnswers)
            //gamePlay === 'n'
        }catch(error){

        }
    }
    getData(URL)
//}
