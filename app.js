let youscore=0;
let compscore=0;
const msg=document.querySelector("#msg");

const youscorePara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const genranval=()=>{
    const options=["rock","paper","scissors"];
    const ranIndx=Math.floor(Math.random()*3)//math.random generate 0 to less than 1 so multiply by 3 becomes 0 to 2 and by flooring it we will find the index.
    return options[ranIndx];
}

const drawGame=()=>{
    msg.innerText="Match Draw ! Play again ."
    msg.style.backgroundColor="#3F292B"
    msg.style.color="white";
}

const showWinner=(userWin,userChoice,compUser)=>{
    if(userWin){
        youscore++;
        youscorePara.innerText=youscore;
        msg.innerText=`User Won! your ${userChoice} beats ${compUser}`;
        msg.style.backgroundColor="green"
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`Comp Won! ${compUser} beats your ${userChoice}`;
        msg.style.backgroundColor="red"
        msg.style.color="black"
    }
}

const playgame=(userChoice)=>{
    const compUser=genranval();

    if(userChoice===compUser){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            if(compUser=="paper"){
                userWin=false;
            }
        }else if(userChoice=="paper"){
            if(compUser=="scissors"){
                userWin=false;
            }
        }else{
            if(compUser=="rock"){
                userWin=false;
            }
        }
        showWinner(userWin,userChoice,compUser);
    }
}

let choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    })
})