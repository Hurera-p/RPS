let cc = []; // computer choice
let uc = []; // user choice 

let random_no = Math.floor(Math.random()*3)+1; 

if(random_no==1) {
cc.push(1);
}
else if (random_no==2) {
cc.push(2);
}
else if (random_no==3) {
cc.push(3);
}

function usr_choice(value) {
uc.push(value); 
if(uc.length>1) {
uc.shift(); 
}}

document.getElementById("btn").addEventListener("click", compare); 

function compare() {

if(uc==1 && cc==1) {
document.getElementById("uc").innerHTML = "Your choice:Rock"; 
document.getElementById("cc").innerHTML = "Computer choice:Rock"; 
document.getElementById("result").innerHTML = "draw"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}

}
else if (uc==1 && cc==2) {
document.getElementById("uc").innerHTML = "Your choice:Rock"; 
document.getElementById("cc").innerHTML = "Computer choice:Paper"; 
document.getElementById("result").innerHTML = "Computer Won"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}

}
else if (uc==1 && cc==3) {
document.getElementById("uc").innerHTML = "Your choice:Rock"; 
document.getElementById("cc").innerHTML = "Computer choice:Scissor"; 
document.getElementById("result").innerHTML = "You won"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==2 && cc==1) {
document.getElementById("uc").innerHTML = "Your choice:Paper"; 
document.getElementById("cc").innerHTML = "Computer choice:Rock"; 
document.getElementById("result").innerHTML = "Computer Won"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==2 && cc==2) {
document.getElementById("uc").innerHTML = "Your choice:Paper"; 
document.getElementById("cc").innerHTML = "Computer choice:Paper"; 
document.getElementById("result").innerHTML = "Draw"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==2 && cc==3) {
document.getElementById("uc").innerHTML = "Your choice:Paper"; 
document.getElementById("cc").innerHTML = "Computer choice:Scissor"; 
document.getElementById("result").innerHTML = "Computer Won"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==3 && cc==1) {
document.getElementById("uc").innerHTML = "Your choice:Scissor"; 
document.getElementById("cc").innerHTML = "Computer choice:Rock"; 
document.getElementById("result").innerHTML = "You won"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==3 && cc==2) {
document.getElementById("uc").innerHTML = "Your choice:Scissor"; 
document.getElementById("cc").innerHTML = "Computer choice:Paper"; 
document.getElementById("result").innerHTML = "You won"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==3 && cc==3) {
document.getElementById("uc").innerHTML = "Your choice:Scissor"; 
document.getElementById("cc").innerHTML = "Computer choice:Scissor"; 
document.getElementById("result").innerHTML = "Draw"; 

document.getElementById("btn").innerHTML = "<b>Play again?</b>"; 
document.getElementById("btn").addEventListener("click", reload);
function reload() {
location.reload(); 
}
}
else if (uc==0) {
document.getElementById("uc").innerHTML = "Select an option :(";    
}

}
