let p = document.querySelector("p");
let body = document.querySelector("body");

let started = false;
let level = 0;

let gameSeq =[];
let userSeq = [];

let btnIdx = ["first","second","third","forth"];

document.addEventListener("keypress",function(){
    if (started == false) {
        started = true;
        levelup();
    }
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    level++;
    userSeq=[];
    p.innerText  = `Level ${level}`;
    let randombtn = Math.floor(Math.random()*4);
    let flashbtn = btnIdx[randombtn];
    let randbox = document.querySelector(`.${flashbtn}`)
    gameSeq.push(flashbtn);
    console.log("Game Seq :",gameSeq);
    btnflash(randbox);
}

function checkSeq(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }
    else{
        p.innerHTML  = `Game over ! You Socre is <b>${level}</b><br>Press any key to restart. `;
        body.classList.add("redflash");
        setTimeout(function() {
            body.classList.remove("redflash");
        }, 250);
        gameSeq = [];
        userSeq = [];
        level =0;
        started = false;
    }
}

function userflash(){
    btnflash(this);
    userSeq.push(this.id);
    console.log("user Seq :",userSeq);
    checkSeq(userSeq.length-1);
}


let allbtn = document.querySelectorAll(".btn");
for (btn of allbtn) {
    btn.addEventListener("click",userflash);
}
