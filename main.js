//./main
//Hay que realizar numeros aleatorios 
//Iniciacion de variables
let tarjetasDestapadas = 0 ;
let tarjeta1=null;
let tarjeta2=null;
let primerResultado=null;
let segundoResultado=null;
let movimientos=0;
let aciertos=0;
let temporizador = false;
let timer=3;
let timerInicial=timer;
let tiempoNegatico=null;

//html
let mostrarMovimientos = document.getElementById("Movimientos");
let mostrarAciertos = document.getElementById("aciertos");
let mostrarTiempo = document.getElementById("t-restante");

let numeros=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);
//Funcion del temporaizador
function contarTiempo(){
    tiempoNegatico=setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML =`Tiempo ${timer} segundos`;
        if(timer==0){
            clearInterval(tiempoNegatico);
            mostrarTiempo.innerHTML =`Tiempo ${timer} segundos`;
            bloquearTarjetas();
        }
    },1000);
}

//Funcion para bloquear tarjetas
function bloquearTarjetas(){
    for (let i = 0; i <=15; i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled=true;
    }
}

//funcion principal
function destapar(id){
    //Temporizador
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas);
    //verificacion
    if (tarjetasDestapadas == 1 ){
        //Primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id];
        tarjeta1.innerHTML= primerResultado;
        //Desabulitar el primer boton
        tarjeta1.disabled=true;
    
    }else if(tarjetasDestapadas==2){
        //Segundo numero
        tarjeta2=document.getElementById(id);
        segundoResultado=numeros[id];
        tarjeta2.innerHTML=segundoResultado;
        //Deshabilitar el segundo boton
        tarjeta2.disabled=true;
        //Incrementar movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;
        
        if (primerResultado == segundoResultado){
            //Encerar contador tarjetas destapadas
            tarjetasDestapadas=0;
            //aumentar aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;

            if(aciertos==8){
                clearInterval(tiempoNegatico);  
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} ¡¡Felicidades, has ganado el juego!!`;
                mostrarTiempo.innerHTML = `Fantastico Solo demoraste ${timerInicial - timer} segundos`;
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} ¡¡Felicidades, has ganado el juego!!`;
            }
        }else{
            //Mostrar momentaneamente los valores y volver a tapar
            setTimeout(()=>{
                tarjeta1.innerHTML="";
                tarjeta2.innerHTML="";
                tarjeta1.disabled=false;
                tarjeta2.disabled=false;
                //contador tarjetas destapadas vuelve a 0
                tarjetasDestapadas=0;
            },800)
        }
    }
}