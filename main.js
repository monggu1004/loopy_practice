const upButton = document.querySelector(".up-div");
const downButton =document.querySelector(".down-div");
const score =document.querySelector(".score");

function upClick(){
    score.innerText = parseInt(score.innerText) + 1;
}

function downClick(){
    if (+score.innerText > 0){
        score.innerText = +score.innerText -1;
    }
    else {
        score.classList.add("score-zero");
        setTimeout(()=> {score.classList.remove("score-zero");},1000);
    }  // 셋타임아웃이 없으면 순식간에 작동해서 끝내버림
    
}

upButton.addEventListener("click",upClick);  //가져온 것에 할 걸 넣어주는 것. 
downButton.addEventListener("click",downClick);



//const upDiv = document.querySelector (".score-thumbsup");
//const downDiv = document.querySelector (".score-thumbsdown");
//const score = document.querySelector(".score-count");


//function upEvent(){
  // score.innerText = parseInt (score.innerText) + 1;

//}

//function downEvent(){
  //  if (score.innerText >"0"){
    //score.innerText = parseInt (score.innerText) - 1;
//} else {
  //  score.classList.add("zeroA");
    //setTimeout( ()=>{score.classList.remove("zeroA");} ,1000 )
    
//}
//}

//upDiv.addEventListener("click",upEvent);
//downDix.addEventListener("click",downEvent );
