let startBtn=document.querySelector(".start-btn");
let quizContainer=document.querySelector(".quiz-container");
let form=document.querySelector("form");
let selectedquestions=[];
let currentquestion=0;
let score=0;


let questions = [
{question:"What does HTML stand for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyperlinks Text Mark Language","None"],answer:"Hyper Text Markup Language"},
{question:"What does CSS stand for?",options:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],answer:"Cascading Style Sheets"},
{question:"What does JS stand for?",options:["Java Style","JavaScript","Just Script","JSON Script"],answer:"JavaScript"},
{question:"Which HTML tag creates a hyperlink?",options:["<link>","<a>","<href>","<url>"],answer:"<a>"},
{question:"Which tag is used for the largest heading?",options:["<h6>","<h3>","<h1>","<head>"],answer:"<h1>"},
{question:"Which property changes text color in CSS?",options:["font-color","color","text-style","background"],answer:"color"},
{question:"Which CSS property changes background color?",options:["bgcolor","background-color","color","background-style"],answer:"background-color"},
{question:"Which HTML tag is used for images?",options:["<img>","<image>","<src>","<picture>"],answer:"<img>"},
{question:"Which language runs in the browser?",options:["Python","Java","JavaScript","C++"],answer:"JavaScript"},
{question:"Which symbol is used for comments in JS?",options:["//","<!-- -->","#","**"],answer:"//"},
{question:"Which company developed JavaScript?",options:["Microsoft","Netscape","Google","Oracle"],answer:"Netscape"},
{question:"Which method prints output in console?",options:["console.print()","console.log()","print()","log.console()"],answer:"console.log()"},
{question:"Which keyword declares a variable in JS?",options:["var","define","let","Both var and let"],answer:"Both var and let"},
{question:"Which HTML tag is used for paragraphs?",options:["<para>","<p>","<text>","<paragraph>"],answer:"<p>"},
{question:"Which CSS property controls text size?",options:["font-style","text-size","font-size","size"],answer:"font-size"},
{question:"Which HTML tag is used for line break?",options:["<break>","<br>","<lb>","<line>"],answer:"<br>"},
{question:"Which method converts string to number?",options:["Number()","parseInt()","Both","None"],answer:"Both"},
{question:"Which operator checks equality and type?",options:["==","===","!=","="],answer:"==="},
{question:"Which array method adds element at end?",options:["push()","add()","append()","insert()"],answer:"push()"},
{question:"Which array method removes last element?",options:["pop()","remove()","shift()","delete()"],answer:"pop()"},
{question:"Which keyword defines a function?",options:["func","function","define","method"],answer:"function"},
{question:"Which HTML tag creates a table?",options:["<table>","<tab>","<tbl>","<data>"],answer:"<table>"},
{question:"Which tag creates table row?",options:["<td>","<tr>","<th>","<row>"],answer:"<tr>"},
{question:"Which tag creates table data cell?",options:["<td>","<tr>","<th>","<cell>"],answer:"<td>"},
{question:"Which tag creates table header?",options:["<th>","<head>","<td>","<header>"],answer:"<th>"},
{question:"Which CSS property aligns text center?",options:["align","text-align","center-text","position"],answer:"text-align"},
{question:"Which HTML tag creates an unordered list?",options:["<ul>","<ol>","<li>","<list>"],answer:"<ul>"},
{question:"Which tag defines list item?",options:["<li>","<item>","<ul>","<ol>"],answer:"<li>"},
{question:"Which CSS property adds space inside element?",options:["margin","padding","space","border"],answer:"padding"},
{question:"Which CSS property adds space outside element?",options:["padding","margin","gap","border"],answer:"margin"}
];


function showQuestion(){
    quizContainer.innerHTML="";
    let q=selectedquestions[currentquestion];
    quizContainer.append(q.question);
    quizContainer.append(document.createElement("br"));

    for( let option of  q.options){
        let radioBtn=document.createElement("input");
        radioBtn.type='radio';
        radioBtn.name="q";
        radioBtn.value=option;

        let label=document.createElement("span");
        label.textContent=option;

        quizContainer.append(radioBtn);
        quizContainer.append(label);
        quizContainer.append(document.createElement("br"));
    }
    let subBtn=document.createElement("button");
    subBtn.type="submit";
    subBtn.innerHTML="Next";

    quizContainer.append(subBtn);
}

startBtn.addEventListener("click",function(){
    questions.sort(()=>Math.random()-0.5);//0.5 lena jaruri nhi h take anything
    selectedquestions=questions.slice(0,10);

    this.style.display="none";
    quizContainer.style.display="block";

    showQuestion();
    
});

form.addEventListener("submit",function(event){
    event.preventDefault();

    let data= new FormData(form);//ye basically sara selected data store kr leta hai object jese structure me
    let answer=data.get("q");//ye specific input ki value deta h

    if(answer==selectedquestions[currentquestion].answer){
        score++;
    }
    currentquestion++;

    if(currentquestion<selectedquestions.length){
        showQuestion();
    }
    else{
        quizContainer.innerHTML=`your final score is : ${score}`;
    }

});
