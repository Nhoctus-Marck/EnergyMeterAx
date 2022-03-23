
let meter = 3;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.button')



buttons.forEach(button => {
    button.addEventListener('click', function(e) {

        const estilos = e.currentTarget.classList;
        

        if(estilos.contains('Increase')) {
            meter++;
            cambio_margen();
            blockdigito();
            
            
            
            
        }
        else if(estilos.contains('Decrease')) {
            meter--;
            cambio_margen();
            blocknegative();
            

        }
        else if (estilos.contains('NextRound')) {
            meter = meter + 2;
            cambio_margen();
            blockdigito();
            
        }
        else{
            meter = 3;
            cambio_margen();
        }
        value.textContent = meter;
        

    })
    
});

//function iniciardobledigito(){
//    document.getElementById("value").onclick=cambio_margen;
//}

function cambio_margen(){
    if (meter <= 9 ){
        document.getElementById("value").style.marginLeft="70px";
    }
    else if (meter >= 10 ){
        document.getElementById("value").style.marginLeft="60px";
    }

}

function blockdigito(){
    if (meter >= 10){
        meter = 10;
    }
}

function blocknegative(){
    if (meter <= -1){
        meter = 0;
    }
}
