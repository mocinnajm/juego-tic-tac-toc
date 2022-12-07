 const celdas = document.querySelectorAll('.celda');
const btnreiniciar = document.querySelector('.reiniciar')
const turnoActual =document.querySelector('.turno_actual');
const jugador1puntuación = document.querySelector('.puntuación1');
const jugador2puntuación = document.querySelector('.puntuación2');
const empates =document.querySelector('.empate');
const mensajecontenido =document.querySelector('.contenido');



const combos= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let turno = true;
let Celdasusadas =[];
let ganador = false;
let emptado = 0;


let jugador1 ={
    simbolo: '<i class="fa fa-close"></i>',
    jugar : [],
    puntuacion: 0
}
let jugador2={
    simbolo: '<i class="fa fa-circle-o"></i>',
    jugar : [],
    puntuacion: 0
}

comprobaTurno();
for(let i=0;i<9;i++){
    celdas[i].addEventListener('click' , () =>{
        if(isEmpty(i)){
            if(turno== true){
                añadirsimbolos(jugador1,i)
                checkganador(jugador1);                      // aqui utiluzamos el envento
                turno = false;
                comprobaTurno();
         }else{
             añadirsimbolos(jugador2,i);
             checkganador(jugador2);
             turno= true;
             comprobaTurno();
         }

        }else{
            alert('eligier una celda vacia');
        }
        
    })

    }
    function añadirsimbolos(jugador,i){
        celdas[i].innerHTML = jugador.simbolo;
        jugador.jugar.push(i);
        Celdasusadas.push(i);

    }
    function checkganador(jugador){
        if (!ganador){
            combos.some(combo =>{
                if(combo.every(index => jugador.jugar.includes(index))){ // aqui comprobamos el ganador
                    alert('you won');
                    jugador.puntuacion++;
                    mostrarPuntuacion();
                }
            })

        }
        if(!ganador&& Celdasusadas.length == 9){
            emptado++;
            mostrarPuntuacion();

        }
        
    }
    function isEmpty(i){
        if(Celdasusadas.includes(i)){     // aqui preguntamos si las celdas stan ocupadas o vacias
            return false;
        }
        return true;
    }
    function reiniciar (){

        celdas.forEach(celda =>{
            celda.innerHTML ='';
        })
        Celdasusadas =[];
        jugador1.jugar =[];
        jugador2.jugar =[];
        turno= true;
        comprobaTurno();
    }

    btnreiniciar.addEventListener('click',reiniciar);
    
    
    
    
    function comprobaTurno(){

        if(turno==true){
            turnoActual.innerHTML = jugador1.simbolo;
            
        }else{
            turnoActual.innerHTML =jugador2.simbolo;
        }

    }
    function mostrarPuntuacion(){
        jugador1puntuación.innerHTML =jugador1.puntuacion;
        jugador2puntuación.innerHTML =jugador2.puntuacion;
        empates.innerHTML=emptado;

    }
    
   