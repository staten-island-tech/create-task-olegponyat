let gamePlay = 'y'
let numberCorrect = 0
//while(gamePlay = 'y'){
    function main(){
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
                    
                    let questionAnswered = false
                    while(questionAnswered === false){
                        let userAns = prompt(`${awaitJSON.results[i].question}, \n\n ${arr}`).toUpperCase()
                        console.log(userAns)
                        if(userAns != 'A' && userAns != 'B' && userAns != 'C' && userAns != 'D'){
                            alert('not a letter you can pick. A, B, C, or D')
                            continue
                        }else {
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
                            questionAnswered === true
                            break
                        }
                    }
                }
                
                for(i=0;i <= 9; i++){
                    if(userAnswers[i] === correctAnswers[i]){
                        numberCorrect++
                    }else{
                        numberCorrect
                    }
                }
                console.log(numberCorrect,userAnswers,correctAnswers)
                
            }catch(error){
                console.log(error)
            }
        }
        getData(URL)
    }
    main()
    
//}
