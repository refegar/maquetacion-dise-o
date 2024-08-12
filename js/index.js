const cerrarmodel = document.getElementById('model-cerrar');
const abrirbars = document.getElementById('bars');
const navElement = document.querySelector('nav');


cerrarmodel.addEventListener('click',function () {
    document.getElementById('model').style.display='none';

})


abrirbars.addEventListener('click',function(){

  if(navElement.style.display==='flex'){
    navElement.style.display='none';
  }
  else{
    navElement.style.display='flex'
  }
    

})

// model contatecnos desde servicion cliente
const elementosClientes = document.getElementsByClassName('clientes');
const cerraservicio = document.getElementById('clientes_contacto');

// Agregar un evento clic a cada elemento con la clase 'clientes'


for (let i = 0; i < elementosClientes.length; i++) {

   

    elementosClientes[i].addEventListener('click', function() {
        // Ocultar el elemento actual al que se le hizo clic

        this.style.display = 'none';
        cerraservicio.style='display:block; ';
    
        cerraservicio.addEventListener('click',function(){
     
        cerraservicio.style.display='none';
        elementosClientes[i].style.display = 'block';
 })


        
    });


}


window.addEventListener('resize', function() {
    const element = document.getElementById('miElemento'); // Reemplaza con el ID de tu elemento

    if (window.innerWidth >= 420) {
        if(navElement.style.display==='none'){
         navElement.style.display='flex';
         }
    }else if(window.innerWidth < 700){
        if(navElement.style.display==='flex'){
         navElement.style.display='none';
         }
    } 
});
