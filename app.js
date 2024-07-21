 let gameSeq=[];
 let userSeq=[];
 let h2=document.querySelector("h2");
 let started=false;
 let level=0;
 let buttons=["yellow","red","blue","green"];
 let maxScore=0;

 document.addEventListener('keypress',function(){
    if(started==false)
        {
            console.log("game started");
            started=true;
            levelUp();
        }
 });

 function levelUp(){
    userSeq=[];
    level++;
    h2.innerText= `Level ${level}`;
    let randomIndex=Math.floor(Math.random()*4);
    let randColor=buttons[randomIndex];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
 }

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
     },250);
 }

 function checkAnswer(idx){
    if(userSeq[idx]===gameSeq[idx])
    {
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
            if(level>maxScore)
            {
                maxScore=level;
            }
            h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start <br><br> Highest Score = ${maxScore}`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor="white";    
            },150);
            reset();
    }
 }
 function reset(){
    started=false; 
    level=0;
    gameSeq=[];
    userSeq=[];
 }
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
     },250);   
 }

 function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAnswer(userSeq.length-1);
 }
 let allBtns=document.querySelectorAll(".btn");
 for(btn of allBtns)
 {
    btn.addEventListener('click',btnPress);
 }