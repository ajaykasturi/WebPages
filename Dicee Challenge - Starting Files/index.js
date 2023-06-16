
let randomNumber1=Math.floor(Math.random()*6)+1;
let img1="./images/"+"dice"+randomNumber1+".png"
let randomNumber2=Math.floor(Math.random()*6)+1;
let img2="./images/"+"dice"+randomNumber2+".png"
document.querySelector("div .img1").setAttribute("src",img1);
document.querySelector("div .img2").setAttribute("src",img2);

let wins=""
if(randomNumber1>randomNumber2){
    wins="🚩Player 1 Wins";
} else if(randomNumber1<randomNumber2){
    wins="Player 2 Wins🚩";
} else if(randomNumber1===randomNumber2){
    wins="Draw!";
}
document.querySelector("h1").innerHTML=wins;
