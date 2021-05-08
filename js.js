/*let x = 10

if (x === 5 || 7 || 10 || 20) {
    console.log("Visualizar: ", x)
}

if (x === 5 || x === 7 || x=== 10 || x === 20) {
    console.log("Vision: ", x)
}

switch(expresion) {
    case choice:
        ejecuta_este_codigo
        break;
    case choice2:
        ejecuta_este_codigo
        break
    default:
        ejecuta_este_otro_codigo
}*/

/*var select = document.querySelector("select");
var para = document.querySelector("p");
select.addEventListener("change" , setWeather);

function setWeather() {
    var choice = select.value;
    switch(choice) {
        case "Sunny":
            para.textContent = "Hoy es un dia bonito y soleado";
            break;
        case "Rainy":
            para.textContent = "Afuera esta lloviendo";
            break;
        case "Snowing":
            para.textContent = "La nieve esta cayendo - Hace frio";
            break;
        case "Overcast":
                para.textContent = "No esta lloviendo pero el cielo esta nublado";
            break;
        default: para.textContent = "";
    }
}*/

/*let isBirtday = true
let greeting = isBirtday === true ? "Feliz cumpleaños Sr. Sech = espero que tengas un gran dia" : "Buenas noches Sr. Sech";
    console.log(greeting)


let select = document.querySelector("select");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function() {
    (select.value === "black") ? update("black","white") : update("white","black")
}

for (var i = 0; i < 100 ; i++) {
    ctx.beginPath();
    ctx.fillstyle = "rgba (255, 0, 0, 0.5)";
    ctx.arc(random(WIDTH), random(HEIGTH), random(50), 0.2 * Math.PI);
    CTXFILL();
}*/

/*let cats = ["Bill", "Jeft", "Michi", "Celso", "Panda"];
let info = "My cats are called";
let para = document.querySelector("p");

for (var i = 0; i < cats.length; i++) {
    info += cats[i] + ", ";
}

para.textContent = info;*/

/*var contacts = ["Cristian:2232527292", "Rafa:5558944079", "Fernando:5584093337", "Kevin:5526053783", "Mariana:5515263524"];
var para = document.querySelector ("p");
var input = document.querySelector ("input");
var btn = document.querySelector ("button");

btn.addEventListener("click", function() {

    var searchName = input.value; 
    input.value = " ";
    input.focus();

    for (var i = 0; i < contacts.length; i++) {

    var splitContant = contacts[i].split(":");

        if(splitContant[0] === searchName) {
        para.textContent = splitContant[0] + " number is " + splitContant[1] + ".";
        break;
        } else {
            para.textContent = "Contact not found";
        }
    }

});*/

/*let elTexto = "Soy una cadena de texto";
let nuevaCadena = elTexto.replace("cadena", "ensalada");
console.log(nuevaCadena);*/

/*let biArray = ["Yo", "amo", "el", "chocolate", "y", "las", "ranas"];
let nuevaCadena = biArray.join(" ");
console.log(nuevaCadena);*/

/*var elNumero = Math.random();
console.log(elNumero);*/

/*function draw() {
    ctx.clearRect(0.0, WIDTH, HEIGHT);

    for (var i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(225,0,0,0.5)";
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0,2 * Math.PI);
        ctx.fill();
    }
}

draw()*/

/*function eyFunction() {
    alert("Hello");
}

eyFunction()*/

/*function() { alert("Hello"); }*/

/*var myGreeting = function() { 
    alert("Hello"); 
}*/


/*function myBigFunction() {
    var myvalue = 1;
    subFunction1(myvalue);
    subFunction2(myvalue);
    subFunction3(myvalue);
}

function subFunction1(value) {
    console.log(value);
}

function subFunction2(value) {
    console.log(value);
}

function subFunction3(value) {
    console.log(value);
}

myBigFunction()*/



//function displayMessage() {
/*function displayMessage(msgText, msgType) {
    var html = document.querySelector("html");

    var panel = document.createElement("div");

    panel.setAttribute("class", "msgBox");

    html.appendChild(panel);

    var msg = document.createElement("p");*/

    //msg.textContent = "This is a message box";
    /*msg.textContent = msgText;

    panel.appendChild(msg);

    var closeBtn = document.createElement("button");

    closeBtn.textContent = "X";

    panel.appendChild(closeBtn);

    closeBtn.onclick = function() {
        panel.parentNode.removeChild(panel);
    }

    if(msgType === "warning") {
        panel.style.backgroundColor = "red";
    } else if (msgType === "that") {
        panel.style.backgroundColor = "aqua";
    } else {
        panel.style.paddingLeft = "20px";
    }
}

var btn = document.querySelector("button");*/

//btn.onclick = displayMessage;
/*btn.onclick = function() {
    displayMessage("Who, this a different message.", "warning");
};*/



var btn =document.querySelector("button");

function random(number) {
    return Math.floor(Math.random()*(number+1));
}

/*btn.onclick = function() {
    var rndCol = "rgb("+ random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;   
}*/

function bgChange(e) {
    var rndCol = "rgb("+ random(255) + "," + random(255) + "," + random(255) + ")";
    document.body.style.backgroundColor = rndCol;
    console.log("e: ", e);
}

btn.addEventListener("click", bgChange);
//btn.removeEventListener("click",bgChange);
