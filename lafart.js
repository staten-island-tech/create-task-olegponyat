let gamePlay = 'y';

async function main() {
  while (gamePlay === 'y') {
    let userAnswers = [];
    let correctAnswers = [];
    function getRandomInt() {
      return Math.floor(Math.random() * (32 - 9 + 1) + 9);
    }

    const URL = `https://opentdb.com/api.php?amount=10&category=${getRandomInt()}&type=multiple`;
    
    async function getData(URL) {
      try {
        let response = await fetch(URL);
        let awaitJSON = await response.json();
        alert(`Welcome. You will be assigned 10 questions to solve based on a randomized category. The difficulty will automatically be set to easy. Pick your answers based on A, B, C, or D. Your category is: ${awaitJSON.results[0].category}`)
        
        for (let i = 0; i < awaitJSON.results.length; i++) {
          let arr = [];
          awaitJSON.results[i].incorrect_answers.forEach((answer) => arr.push(answer));
          arr.push(awaitJSON.results[i].correct_answer);

          function shuffle(array) {
            array.sort(() => Math.random() - 0.5);
          }
          shuffle(arr);

          let questionAnswered = false;
          while (!questionAnswered) {
            let userAns = prompt(`${awaitJSON.results[i].question}, \n\n ${arr}`).toUpperCase();
            if (userAns != 'A' && userAns != 'B' && userAns != 'C' && userAns != 'D') {
              alert('Not a valid letter. Please choose A, B, C, or D.');
              continue;
            } else {
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

              userAnswers.push(getWordByLetter(userAns));
              correctAnswers.push(awaitJSON.results[i].correct_answer);
              questionAnswered = true;
              break;
            }
          }
        }
        
        let numberCorrect = 0;
        for (let i = 0; i <= 9; i++) {
          if (userAnswers[i] === correctAnswers[i]) {
            numberCorrect++;
          }
        }
        alert(`You got a total of ${numberCorrect} right out of 10. Cool beans`)
      } catch (error) {
        throw new Error(error)
      }
    }

    await getData(URL);

    let continueGame = prompt('Do you want to play again? (y or n)').toLowerCase();
    if (continueGame === 'y') {
      gamePlay = 'y';
    } else {
      gamePlay = 'n';
      alert('You have ended the game. Goodbye!!!!')
    }
  }
}

if (gamePlay === 'y') {
  main();
}