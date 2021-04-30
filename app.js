"use strict";

let html = document.getElementById("tiempo");

setInterval(function(){
	const tiempo = new Date();

	let horas = tiempo.getHours();
	let minutos = tiempo.getMinutes();
	let segundos = tiempo.getSeconds();

	//evitar los 0 o numeros individuales
	if(horas<10)
		horas = "0"+horas;
	if(minutos<10)
		minutos = "0"+minutos;
	if(segundos<10)
		segundos = "0"+segundos;

	html.innerHTML = horas+" : "+minutos+" : "+segundos;
},1000);






/* OTRA MANERA DE HACERLO */
/*
const evitarCeros = n => {
    if (n.toString().length < 2) return "0".concat(n);
    return n;
}

const horaActual = () => {
    const time = new Date();

    let hora = evitarCeros(time.getHours());
    let min = evitarCeros(time.getMinutes());
    let seg = evitarCeros(time.getSeconds());

    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
};

horaActual();

setInterval(horaActual,1000);

*/