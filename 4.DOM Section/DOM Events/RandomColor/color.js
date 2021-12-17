const button = document.querySelector("button");

const h1 = document.querySelector("h1");

const body = document.body;

function changeColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    body.style.backgroundColor = `rgb(${r},${g},${b})`

    h1.innerText = `rgb(${r},${g},${b})`

    if (r+g+b<200){
        h1.style.color = "white"
    }
    else {
        h1.style.color = "black"
    }
    
}

button.addEventListener('click', changeColor)