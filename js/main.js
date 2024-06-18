alert("Bienvenido a Hotel Algo!!");

let nombre = prompt("¿Cómo te llamas?");
console.log(nombre);

let cantPersonas;

do {
  cantPersonas = parseInt(
    prompt(`Hola ${nombre}, ¿Cuántas personas se van a hospedar?`)
  );
  if (isNaN(cantPersonas)) {
    alert(`${nombre}, ingresá un número de personas que se van a hospedar.`);
  }
} while (isNaN(cantPersonas));

console.log("Se van a hospedar:", cantPersonas, "personas");

let menores = 0;
let adultos = 0;

for (let i = 1; i <= cantPersonas; i++) {
  let edad = parseInt(prompt(`Ingrese la edad de la ${i} persona`));
  console.log(edad);

  if (edad < 18) {
    menores++;
  } else {
    adultos++;
  }
}

console.log("Cantidad de menores:", menores);
console.log("Cantidad de adultos:", adultos);

alert(`Cantidad de menores: ${menores}\nCantidad de adultos: ${adultos}`);

let cantDias;

do {
  cantDias = parseInt(prompt(`Seleccione la cantidad de días de su estadía`));
  if (isNaN(cantDias)) {
    alert(
      `Ponga un valor numérico para seleccionar la cantidad de días de su estadía`
    );
  }
} while (isNaN(cantDias));

console.log("Usted seleccionó", cantDias, "días para su estadía.");

function calcularPrecio(cantPersonas, cantDias, menores, adultos) {
  const precioBase = 70;
  let precioTotal =
    menores * precioBase * cantDias * 0.9 + adultos * precioBase * cantDias;

  if (precioTotal >= 700) {
    precioTotal *= 0.95;
  }
  return precioTotal;
}
let precioTotal = calcularPrecio(cantPersonas, cantDias, menores, adultos);

console.log("el precio total es de", precioTotal, "U$S");
alert(`El valor de su estadía es de ${precioTotal} U$S.`);

switch (true) {
  case precioTotal > 1999:
    console.log("Tenés una noche gratis en tu próxima estadía!!");
    alert("Tenés una noche gratis en tu próxima estadía!!");
    break;
  case precioTotal > 1499:
    console.log("Tenés un tour gratis en tu próxima visita!!");
    alert("Tenés un tour gratis en tu próxima visita!!");
    break;
  case precioTotal > 999:
    console.log("Tenés traslado gratis al aeropuerto en tu próxima visita!!");
    alert("Tenés traslado gratis al aeropuerto en tu próxima visita!!");
    break;
  case precioTotal < 1000:
    console.log("No tenés beneficios para tu próxima estadía");
    alert("No tenes beneficio para tu próxima estadía.");
    break;
}
