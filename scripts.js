const TotalWeek = document.querySelector(".bigTitle");
const bars = document.querySelectorAll(".bar");
const spans = document.querySelectorAll(".span");
const month = document.getElementById("principal");
const date = new Date();
const dia = date.getDay();
const mediaQuery = window.matchMedia('(min-width: 450px)');
let divisor;


//The dimensions of the screen are checked to adjust the size of the graph
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
    setTimeout(()=>{//I use a setTimeout to ensure that the elements have already loaded by the time the script is executed
      let dataValue = Object.values(data)
      for (let cont = 0; cont < data.length; cont++) {
        let valor = dataValue[cont].amount;
        let proporsion = Math.trunc(valor);
        bars[cont].style.setProperty("height", `${proporsion/divisor}rem`);
        spans[cont].innerHTML = `$${valor}`
    }
    }, 0);
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });


  if (dia == 0) {//I get the current day to apply the distinctive color and adjust the data assignment
    bars[6].style.setProperty("background-color", "hsl(186, 34%, 60%)")
  } 
  else{
    bars[dia - 1].style.setProperty("background-color", "hsl(186, 34%, 60%)")
  }