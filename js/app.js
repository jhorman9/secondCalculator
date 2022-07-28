const display =document.querySelector(".display");//solo llama este solo.
//console.log(display);//esto es solo para verlo en consola del navegador
const buttons = document.querySelectorAll(".btn");//para obtener el nmr4
let value = 0;
/*console.log(buttons)

function escuchando(e){
    console.log(e)
}

buttons.addEventListener("click", escuchando)//se crea la function para que lo imprima

function addEventListener(evento,funct){
    //codigo
    funct("dblclick")
}*/

function escuchando(e){
    //console.log(e.target.textContent);//se pone el target, el textContent es para saber que texto me esta dando cada uno.
    value += e.target.textContent;//concatena y asigna
    display.textContent = value;//

}

for(let i= 0; i<buttons.length; i++){
    //console.log(buttons[i])//para saber si me esta corriendo
    
    buttons[i].addEventListener("click", escuchando)//ver el target del console del navegador ya se agrego un evento a todos los botones de esta manera. Solo se agrego el evento.
}
