const btn = document.querySelector("#v2");

btn.onclick = function(){
    console.log("you clicked me");
    console.log("i hope it worked");
}
function scream(){
    console.log("AAAAAAAAAAH");
    console.log("stop toucching me");
}
btn.onmouseenter = scream;

const btn3=document.querySelector("#v3");

btn3.addEventListener('onclick',()=> {
    alert('clicked');
})

function twist(){
    console.log('twist');
}
function shout(){
    console.log('shout');
}

const tasButton = document.querySelector("#tas");

tasButton.addEventListener('click',twist);
tasButton.addEventListener('click',shout);