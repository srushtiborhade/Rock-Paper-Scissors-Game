let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");

const genComputerChoice = ()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame =()=>{
    msg.innerText="Draw game , Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!! Your ${userChoice} beats ${computerChoice}`; /*Ithe aapn te index.html madhla msg container access kela*/ 
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        computerScorePara.innerText=compScore;
        msg.innerText=`You lose ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice);
    const computerChoice=genComputerChoice();
    console.log("Computer choice = ",computerChoice);

    if(userChoice===computerChoice)
    {
        drawGame();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //scissors,paper
            userWin=computerChoice==="paper" ? false : true;/*ternary ahe ithe jr computer chi choice paper asel mhanje user chi scissors asel tr user jinkel so false yeil userwin ani jr scissors zali computer chi tr mg true*/
        }
        else if(userChoice==="paper")
        {
            //rock,scissors
            userWin=computerChoice==="scissors" ? false : true;
        }
        else
        {
            //rock,paper
            userWin=computerChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
