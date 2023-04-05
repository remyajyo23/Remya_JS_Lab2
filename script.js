const quizQuestion = [{
    question:"1. Javascript is a _____ language",
    a:"Programming",
    b:"Application",
    c:"Scripting",
    d:"None of above",
    correct:"c"
},
{
    question:"2. JavaScript is a _____ Side Scripting Language.",
    a:"Server",
    b:"Browser",
    c:"ISP",
    d:"None of above",
    correct:"b"
},
{
    question:"3.  JavaScript code is written inside file having extension",
    a:".jvs",
    b:".js",
    c:".jsc",
    d:".javascript",
    correct:"b"
},
{
    question:"4. Local Browser used for validations on the Web Pages uses",
    a:"JS",
    b:"Java",
    c:"HTML",
    d:"CSS",
    correct:"a"
},
{
    question:"5. JavaScript code can be called by using",
    a:"RMI",
    b:"Preprocessor",
    c:"Function/Method",
    d:"None of above",
    correct:"c"
},
{
    question:"6.  JavaScript is also called as",
    a:"Server side scripting language",
    b:"Client side scripting language",
    c:"All of the above",
    d:"None of the above",
    correct:"b"
},
{
    question:"7.  Which of the following is not javascript data types",
    a:"Null type",
    b:"Undefined type",
    c:"Number type",
    d:"All of the above",
    correct:"d"
},
{
    question:"8.  Which built-in method returns the string representation of the number's value",
    a:"toValue()",
    b:"toNumber()",
    c:"toString()",
    d:"None of the above",
    correct:"c"
},
{
    question:"9. Which built-in method returns the length of the string",
    a:"length()",
    b:"size()",
    c:"index()",
    d:"None of the above",
    correct:"A"
},
{
    question:"10.  JavaScript is written under which tag",
    a:"<JavaScript></JavaScript>",
    b:"<script></script>",
    c:"<js></js>",
    d:"None of the above",
    correct:"b"
}];

let currentNo = 0;
let score = 0;
let unanswered = 10;

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const aOption = document.getElementById("aOption");
const bOption = document.getElementById("bOption");
const cOption = document.getElementById("cOption");
const dOption = document.getElementById("dOption");
const answer = document.querySelectorAll(".answer");
const submit = document.getElementById("submit");
const next = document.getElementById("next");

begin()

function begin(){

    unchecked()

    const currentQuiz = quizQuestion[currentNo]
    question.innerText = currentQuiz.question
    aOption.innerText = currentQuiz.a
    bOption.innerText = currentQuiz.b
    cOption.innerText = currentQuiz.c
    dOption.innerText = currentQuiz.d

}

function selected() {
    let answertemp
    answer.forEach(answer1 => {
        if(answer1.checked) {
            answertemp = answer1.id
        }
    })
    --unanswered
    return answertemp
}

function unchecked() {
    answer.forEach(answer1 => answer1.checked = false)
}

next.addEventListener('click',() => {
    const answer = selected()
    if(answer){
        if(answer === quizQuestion[currentNo].correct) {
            score++
        }
        currentNo++
        if(currentNo < quizQuestion.length) {
            begin()
        } else {
            quiz.innerHTML = `
            <h2>You score: ${score}/${quizQuestion.length}</h2> 
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})

submit.addEventListener('click',() =>{
    if(unanswered != 0){
        quiz.innerHTML = `
            <h2>You need to answer ${unanswered} questions. Please start from beginning</h2>
            <button onclick="location.reload()">Reload</button>
            `
    }else{
        quiz.innerHTML = `
            <h2>You score: ${score}/${quizQuestion.length}</h2> 
            <button onclick="location.reload()">Reload</button>
            `
    }
})