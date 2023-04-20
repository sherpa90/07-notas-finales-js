// función para calcular el promedio
function calcularPromedio(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
  }
  
  // función para agregar una fila a la tabla
  function agregarFilaTabla(asignatura, nota1, nota2, nota3, promedio) {
    let tbody = document.querySelector("#tabla-notas tbody");
    let fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${asignatura}</td>
      <td>${nota1}</td>
      <td>${nota2}</td>
      <td>${nota3}</td>
      <td>${promedio.toFixed(2)}</td>
    `;
    tbody.appendChild(fila);
  }
  
  // función principal para agregar una nueva asignatura
  function agregarAsignatura() {
    // obtener los valores de los inputs
    let asignatura = prompt("Ingrese el nombre de la asignatura:");
    let nota1 = parseFloat(prompt("Ingrese la nota 1:"));
    let nota2 = parseFloat(prompt("Ingrese la nota 2:"));
    let nota3 = parseFloat(prompt("Ingrese la nota 3:"));

    
  
    // calcular el promedio
    let promedio = calcularPromedio(nota1, nota2, nota3);
  
    // agregar la fila a la tabla
    agregarFilaTabla(asignatura, nota1, nota2, nota3, promedio);
  }
  
  // agregar evento al botón "Agregar Asignatura"
  let btnAgregar = document.querySelector("#btn-agregar");
  btnAgregar.addEventListener("click", agregarAsignatura);
  