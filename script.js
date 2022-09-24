const button = document.querySelector("#goodbye-btn");
const headLine = document.querySelector("#hello");
const image = document.querySelector("img");
const body = document.querySelector("body");

/*
Adds an eventListener to the button that listnes on 
the event click and then runs the function below
*/
button.addEventListener("click",function(){
    if (headLine.textContent == "Hello World!"){
        headLine.textContent = "GoodBye World!"
        button.textContent = "Say Hello"
        image.src = "cat2.gif"
        body.style.borderColor = "yellow"
        headLine.style.color = "yellow"
    }
    else{
        headLine.textContent = "Hello World!"
        button.textContent = "Say goodbye"
        image.src = "cat.gif"
        body.style.borderColor = "blue"
        headLine.style.color = "blue"
    }
    
})