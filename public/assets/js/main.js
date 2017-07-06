'use strict';
const render = (root)=>{
	root.empty();

	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(Header());
	wrapper.append(Categoria());

	root.append(wrapper);
};


$(_=>{
	const root = $(".root");

	render(root);
});

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


'use strict';
const Header = ()=>{
	const header = $("<header></header>");
	const navFixed = $("<nav class='navbar navbar-default navbar-fixed-top'></nav>");
	const container = $("<div class='container-fluid'></div>");
	const navBarHeader = $("<div class='navbar-header'></div>");
	const brandLogo = $("<a class='navbar-brand text-center' href='#'></a>");
	const iconLogo = $("<i class='icon pinterest-logo'></i>");
	const titleLogo = $("<p>Inicio</p>");
	const brandSearch = $("<a class='visible-xs-block navbar-brand text-center navbar-toggle collapsed' data-toggle='collapse' data-target='#form-collapse' href='#'></a>");
	const iSearch = $("<i class='icon search'></i>");
	const titleSearch = $("<p>Buscar</p>");
	const form = $("<form class='navbar-form navbar-left hidden-xs' role='search'></form>");
	const formGroup = $("<div class='form-group'></div>");
	const iconSearch = $("<i class='glyphicon glyphicon-search'></i>");
	const inputSearch = $("<input type='text' class='form-control'placeholder='Buscar'></input>");
	const brandUser = $("<a class='navbar-brand text-center' href='#'></a>");
	const iconUser = $("<i class='icon user'></i>");
	const titleUser = $("<p>Guardado</p>");
	const brandCategoria = $("<a class='navbar-brand text-center' href='#'></a>");
	const iconCategoria = $("<i class='icon categoria'></i>");
	const titleCategoria = $("<p>Categorías</p>");
	const brandNotificacion = $("<a class='navbar-brand text-center' href='#'></a>");
	const iconNotificacion = $("<i class='icon message'></i>");
	const titleNotificacion = $("<p>Notificaciones</p>");
	const navCollapse = $("<div class='hidden-lg collapse navbar-collapse' id='form-collapse'></div>");
	const ul = $("<ul class='nav navbar-nav'></ul>");
	const li = $("<li></li>");
	const formCollapse = $("<form class='navbar-form navbar-left' role='search'></form>");
	const formGroupCollapse = $("<div class='form-group'></div>");
	const iconCollapse = $("<i class='glyphicon glyphicon-search'></i>");
	const inputCollapse = $("<input type='text' class='form-control'placeholder='Buscar'></input>");

	brandLogo.append(iconLogo);
	brandLogo.append(titleLogo);
	brandSearch.append(iSearch);
	brandSearch.append(titleSearch);
	form.append(formGroup);
	formGroup.append(iconSearch);
	formGroup.append(inputSearch);
	brandUser.append(iconUser);
	brandUser.append(titleUser);
	brandCategoria.append(iconCategoria);
	brandCategoria.append(titleCategoria);
	brandNotificacion.append(iconNotificacion);
	brandNotificacion.append(titleNotificacion);

	navBarHeader.append(brandLogo);
	navBarHeader.append(brandSearch);
	navBarHeader.append(form);
	navBarHeader.append(brandUser);
	navBarHeader.append(brandCategoria);
	navBarHeader.append(brandNotificacion);

	formGroupCollapse.append(iconCollapse);
	formGroupCollapse.append(inputCollapse);
	formCollapse.append(formGroupCollapse);
	li.append(formCollapse);
	ul.append(li);
	navCollapse.append(ul);

	container.append(navBarHeader);
	container.append(navCollapse);
	navFixed.append(container);
	header.append(navFixed);

	return header;
}


