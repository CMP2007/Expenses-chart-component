const TotalWeek = document.querySelector(".bigTitle");
const bars = document.querySelectorAll(".bar");
const spans = document.querySelectorAll(".span");
const month = document.getElementById("principal");
const date = new Date();
const dia = date.getDay();
const mediaQuery = window.matchMedia('(min-width: 450px)');
let divisor;
if (mediaQuery.matches) {
  divisor = 7;
  console.log('La pantalla es mayor a 450px');
} else {
  divisor = 5.5;
  console.log('La pantalla es menor o igual a 450px');
}

fetch("./data.json")
.then(response => response.json())
  .then(data => {
    setTimeout(()=>{
      let dataValue = Object.values(data)
      for (let cont = 0; cont < data.length; cont++) {
        let valor = dataValue[cont].amount;
        let proporsion = Math.trunc(valor);
        bars[cont].style.setProperty("height", `${proporsion/divisor}rem`);
        spans[cont].innerHTML = `$${valor}`
       
        console.log(proporsion );
    }
    }, 0);
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });


  if (dia == 0) {
    bars[6].style.setProperty("background-color", "hsl(186, 34%, 60%)")
  } 
  else{
    bars[dia - 1].style.setProperty("background-color", "hsl(186, 34%, 60%)")
  }

const elemento = document.getElementById('miElemento');

