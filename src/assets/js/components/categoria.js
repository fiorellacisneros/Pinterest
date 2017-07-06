'use strict';
const array = ["inspiracion", "minimalista", "grafico", "infantil", "fotografia", "responsivo", "botones",
"portafolio", "movil", "colores", "arquitectura", "moda", "corporativo", "frases",
"empresarial", "español", "comida", "restaurante", "tienda", "productos", "wordpress",
"design", "template", "flat","2017"];

const Categoria = ()=>{
	console.log(array);

	const div = $("<div class='seccion'><div>");
	
	$.each(array, (i , elem)=>{
		let red = Math.round(Math.random()*255);
		let green = Math.round(Math.random()*255);
		let blue = Math.round(Math.random()*255);

		let itemCat = $("<a class='seccion__item'>"+elem+"</a>");
		itemCat.css("background","rgb("+red+","+green+","+blue+")");
		div.append(itemCat);
	});

	return div;
};

