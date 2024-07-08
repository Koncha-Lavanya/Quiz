/*
var start=document.getElementsByTagName("a");
start.onclick=function(){
    alert("Your quiz is ready to start");
    */

var questions=[{question:"What is a data structure?",
        answers:[{text:"A. interface between the hardware and application programs",correct:false},
            {text:"B.collection of programs that manages hardware resources",correct:false},
            {text:"C. system service provider to the application programs",correct:false},
            {text:"D. all of the mentioned",correct:true}]
        },
    {question:"What is the main function of the command interpreter?",
            answers:[{text:"A. to provide the interface between the API and application program",correct:false},
    {text:"B. to handle the files in the operating system",correct:true},
    {text:"C.to get and execute the next user-specified command",correct:false},
    {text:"D. none of the mentioned",correct:false}]
            },
    {question:"In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        answers:[{text:"A.Priority",correct:false},
            {text:"B.Round Robin",correct:false},
            {text:"C.Shortest Job First",correct:false},
            {text:"D.All of the mentioned",correct:true}]
    },
    {question:"To access the services of the operating system, the interface is provided by the ___________",
         answers: [{text:"A. Library",correct:false},
            {text:"B.System calls",correct:true},
            {text:"C.Assembly instructions",correct:false},
            {text:"D.API",correct:false}]
        },
     {question: "CPU scheduling is the basis of ___________",
        answers:[{text:"A.multiprogramming operating systems",correct:true},
        {text:"B. larger memory sized systems",correct:false},
        {text:"C.multiprocessor systems",correct:false},
        {text:"D.none of the mentioned",correct:false}]
     },
     {question:" Which one of the following errors will be handle by the operating system?",
          answers:[{text:"A.lack of paper in printer",correct:false},
        {extt:"B.connection failure in the network",correct:false},
        {text:"C.power failure",correct:false},
        {text:"D.all of the mentioned",correct:true}]
     },
     {question: "Where is the operating system placed in the memory?",
        answers:[{text:"A.either low or high memory (depending on the location of interrupt vector)",correct:true},
        {text:"B.in the low memory",correct:false},
        {text:"C.in the high memory",correct:false},
        {text:"D.none of the mentioned",correct:false}]
     },
     {question: "If a process fails, most operating system write the error information to a ______",
        answers:[{text:"A.new file",correct:false},
        {text:"B.another running process",correct:false},
        {text:"C.log file",correct:true},
        {text:"D.none of the mentioned",correct:false}]
     },
    { question:"Which one of the following is not a real time operating system?",
        answers:[{text:"A.RTLinux",correct:false},
        {text:"B.Palm OS",correct:true},
        {text:"C.QNX",correct:false},
        {text:"D.VxWorks",correct:false}]
    },
    {question:"What does OS X has?",
        answers:[{text:"A.monolithic kernel with modules",correct:false},
        {text:"C.microkernel",correct:false},
        {text:"C. monolithic kernel",correct:false},
        {text:"D.hybrid kernel",correct:true}]
    }
        ];
var quesElement=document.getElementById("ques");
var ansElement=document.getElementById("answer-buttons");
var nextbtn=document.getElementById("next");


 let currentQuestionIndex=0;
let score=0;

function showQuestion(){
    resetState();
    let currentQues=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    quesElement.innerHTML = questionNo + ". " + currentQues.question;

    currentQues.answers.forEach(answer=>{
        var button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        ansElement.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    })
}

function resetState(){
    nextbtn.style.display="none";
    while(ansElement.firstChild){
        ansElement.removeChild(ansElement.firstChild);
    }

}

function startQuiz(){
    resetState();
    currentQuestionIndex=0;
    score=0;
    nextbtn.innerHTML="Next";
    showQuestion();
}

function selectAnswer(e){
    var selectedBtn=e.target;
    var isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
}
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(ansElement.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbtn.style.display="block";
}
    

function showScore(){
    resetState();
    quesElement.innerHTML=`You scored  ${score} out of ${questions.length}!!`
    if(`${score}<=5`){
        quesElement.innerHTML=`You scored  ${score} out of ${questions.length}!!
                                Good,Need to improve!!`;
    }
    else{
        quesElement.innerHTML=`You scored  ${score} out of ${questions.length}!!Well done,Keep it up!!`;
    }
    nextbtn.innerHTML="Play Again";
    nextbtn.style.display="bold";
    }

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextbtn.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();


