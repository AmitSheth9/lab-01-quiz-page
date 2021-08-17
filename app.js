/* eslint-disable no-unused-vars */
// import functions and grab DOM elements

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state



const quizButton = document.getElementById('quizbutton');
const correct = document.getElementById('quizresults');

let correctanswer = 0;

function countsAsAYes(userinput) {
    if (userinput.charAt(0).toLowerCase() === 'y') {
        return true;
    }
    else {
        return false;
    }
}
quizButton.addEventListener('click', () =>{
    let userName = prompt('What is your name?');

    let takequiz = prompt(`${userName}, would you like to take a quiz on Deep Breathing?`);


    if (takequiz.charAt(0).toLowerCase() !== 'y'){
        return;
    }  
    const question1 = prompt(`${userName}, can deep breathing increase the amount of endorphins produced by your body?`);
    const question2 = prompt(`${userName}, does deep breathing increase the stress hormone Cortisol?`);
    const question3 = prompt(`${userName}, can breathing reduce stress and improve concentration?`);
    
    alert(`Congratulations ${userName}, you have finished the quiz. Check the website to see how you did!`);
    if (countsAsAYes(question1)) {
        correctanswer++;
    }

    if (!countsAsAYes(question2)) {
        correctanswer++;
    }
    if (countsAsAYes(question3)) {
        correctanswer++;
    

    }
    
    correct.textContent = `${userName}, you got ${correctanswer} out of 3 correct answers!`;
   
});


