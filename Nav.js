import { useEffect } from "react"




export default function Nav (){

    useEffect(()=>{

var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown'];
var boxes = document.querySelectorAll(".box");
var button = document.querySelector("button");

button.addEventListener("click", function () {
  for ( let i = 0; i < boxes.length; i++) {
    // Pick a random color from the array 'colors'.
    boxes[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    boxes[i].style.width = '100px';
    boxes[i].style.height = '100px';
    boxes[i].style.display = 'inline-block';
  }
});

button.style.cursor = "pointer";


    })


    return <>

<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<div class="box"></div>
<button>Enter</button>
    </>
}