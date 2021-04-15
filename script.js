const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const questionContainerElement = document.getElementById('question-container');

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click', () => {
currentQuestionIndex++;
setNextQuestion();
})

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex

function startGame(){
    console.log('Working');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if(answer.correct){
    button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass (button, button.dataset.correct)
    })

    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    }
    else{
        startButton.innerText ='Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
    element.classList.add('correct');
    }
    else{
    element.classList.add('wrong')
    }

}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'When is Christmas?',
        answers : [
            { text : '25th Dec', correct : true},
            { text : '12th Jun', correct : false},
            { text : '25th Nov', correct : false},
            { text : '30th Feb', correct : false}
        ]
    },
    {
        question: 'What is the length of Cricket pitch ?',
        answers : [
            { text : '22 inch', correct : false},
            { text : '22 yards', correct : true},
            { text : '22 cm', correct : false},
            { text : '22 km', correct : false}
        ]
    },
    {
        question: '"I would go to war with Dhoni by my side." - who said this?',
        answers : [
            { text : 'Ravi  Shastri', correct : false},
            { text : 'Gary Kirsten', correct : true},
            { text : 'Virat Kolhi', correct : false},
            { text : 'Sunil Gavaskar', correct : false}
        ]
    },
    {
        question: 'Where did MS Dhoni make his Test captaincy debut?',
        answers : [
            { text : 'Delhi', correct : false},
            { text : 'Mohali', correct : false},
            { text : 'Kanpur', correct : true},
            { text : 'Nagpur', correct : false}
        ]
    },
    {
        question: 'Who is MS Dhoni only ODI wicket?',
        answers : [
            { text : 'Tino Best', correct : false},
            { text : 'Marlon Samuels', correct : false},
            { text : 'Darren Sammy', correct : false},
            { text : 'Travis Dowlin', correct : true}
        ]
    },
    {
        question: "Dhoni's maiden Test and ODI century both came against the same opponent. Name the team.",
        answers : [
            { text : 'Pakistan', correct : true},
            { text : 'Sri Lanka', correct : false},
            { text : 'England', correct : false},
            { text : 'Australia', correct : false}
        ]
    },
    {
        question: 'Which ICC award did Ben Stokes win for his all-round performance in 2019?',
        answers : [
            { text : 'Ravi  Shastri', correct : false},
            { text : 'Gary Kirsten', correct : true},
            { text : 'Virat Kolhi', correct : false},
            { text : 'Sunil Gavaskar', correct : false}
        ]
    },
    {
        question: 'Which ICC award did Ben Stokes win for his all-round performance in 2019?',
        answers : [
            { text : 'Ravi  Shastri', correct : false},
            { text : 'Gary Kirsten', correct : true},
            { text : 'Virat Kolhi', correct : false},
            { text : 'Sunil Gavaskar', correct : false}
        ]
    },
    {
        question: 'Which ICC award did Ben Stokes win for his all-round performance in 2019?',
        answers : [
            { text : 'ICC Player of the Year', correct : true},
            { text : 'Spirit of Cricket Award, 2019', correct : false},
            { text : 'ICC Test Player of the Year, 2019', correct : false},
            { text : 'ICC ODI Player of the Year, 2019', correct : false}
        ]
    },
    {
        question: "In 2015 during an ODI against Australia at Lord's, Stokes became the first England player in the history of ODI cricket to be given out _______ ?",
        answers : [
            { text : 'Timed Out', correct : false},
            { text : 'Handling the ball', correct : false},
            { text : 'Obstructing the field', correct : true},
            { text : 'Double Hit', correct : false}
        ]
    },
    {
        question: "89 was Stokes' highest score of the 2019 World Cup, and he recorded that twice. Once against Australia and the other against?",
        answers : [
            { text : 'New Zealand', correct : false},
            { text : 'South Africa', correct : true},
            { text : 'India', correct : false},
            { text : 'Pakistan', correct : false}
        ]
    },
    {
        question: 'Which Indian captain has the most wins in Tests away from home?',
        answers : [
            { text : 'MS Dhoni', correct : false},
            { text : 'Virat Kolhi', correct : true},
            { text : 'Sourav Gaunguly', correct : false},
            { text : 'Anil Kumble', correct : false}
        ]
    },
    {
        question: 'Which Indian player has won the most number of Man of the Match awards in overseas Test victories?',
        answers : [
            { text : 'Sachin Tendulkar', correct : false},
            { text : 'Virat Kolhi', correct : false},
            { text : 'Rahul Dravid', correct : true},
            { text : 'Sunil Gavaskar', correct : false}
        ]
    },
    {
        question: 'Who is the only Indian player to have scored a hundred and then secured a 5-wicket haul (in an innings) in an overseas Test win?',
        answers : [
            { text : 'Kapil Dev', correct : false},
            { text : 'H Pandya', correct : false},
            { text : 'R Jadeja  ', correct : false},
            { text : 'R Ashwin', correct : true}
        ]
    },
    {
        question: 'There were two centurions in the 2009 IPL. One was Manish Pandey, who was the other?',
        answers : [
            { text : 'AB de Villiers', correct : true},
            { text : 'Matthew Hayden', correct : false},
            { text : 'David Warner', correct : false},
            { text : 'Chris Gayle', correct : false}
        ]
    },
    {
        question: 'Which of these statements is true of the 2009 IPL?',
        answers : [
            { text : 'Deccan Chargers topped the points table', correct : false},
            { text : 'Ajinkya Rahane has an IPL wicket', correct : true},
            { text : "Ross Taylor was RCB's highest run-getter", correct : false},
            { text : 'Steve Smith played for Rajasthan Royals', correct : false}
        ]
    },
    {
        question: 'Who was the leading run-getter for Rajasthan Royals in IPL 2009?',
        answers : [
            { text : 'Swapnil Asnodkar', correct : false},
            { text : 'G Smith', correct : false},
            { text : 'Y Pathan', correct : false},
            { text : 'R Jadeja', correct : true}
        ]
    },
    {
        question: 'Rohit Sharma has scored the most number of his ODI tons at which venue?',
        answers : [
            { text : 'M. Chinnaswamy Stadium, Bengaluru', correct : false},
            { text : 'Edgbaston, Birmingham', correct : true},
            { text : 'Eden Gardens, Kolkata', correct : false},
            { text : 'Melbourne Cricket Ground', correct : false}
        ]
    },
    {
        question: 'Against which team did Rohit Sharma claim his IPL hat-trick?',
        answers : [
            { text : 'Mumbai Indians', correct : true},
            { text : 'Chennai Super Kings', correct : false},
            { text : 'Delhi Daredevils', correct : false},
            { text : 'Rajasthan Royals', correct : false}
        ]
    },
    

]

