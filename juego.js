 const celdas = document.querySelectorAll('.celda');
const btnreiniciar = document.querySelector('.reiniciar')
const turnoActual =document.querySelector('.turno_actual');
const jugador1puntuación1 = document.querySelector('puntuación1');
const jugador2puntuación2 = document.querySelector('puntuación2');



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
        combos.some(combo =>{
            if(combo.every(index => jugador.jugar.includes(index))){ // aqui comprobamos el ganador
                alert('you won');
            }
        })
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
        jugador2.jugador =[];
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
    
   