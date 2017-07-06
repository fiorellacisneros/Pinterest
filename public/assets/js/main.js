'use strict';
const render = (root)=>{
	root.empty();
	const wrapper = $("<div class='wrapper'></div>");

	wrapper.append(Header());

	root.append(wrapper);
};

$(_=>{
	const root = $(".root");

	render(root);
});

'use strict';
const Header = ()=>{
	const header = $("<header></header>");
	const navFixed = $("<nav class='navbar navbar-default navbar-fixed-top'></nav>");
	const container = $("<div class='container'></div>");
	const navBarHeader = $("<div class='navbar-header'></div>");
	const brandLogo = $("<a class='navbar-brand text-center' href='#'></a>");
	const iconLogo = $("<i class='icon logo'></i>");
	const titleLogo = $("<p>Inicio</p>");
	const form = $("<form class='navbar-form navbar-left' role='search'></form>");
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

	brandLogo.append(iconLogo);
	brandLogo.append(titleLogo);
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
	navBarHeader.append(form);
	navBarHeader.append(brandUser);
	navBarHeader.append(brandCategoria);
	navBarHeader.append(brandNotificacion);

	container.append(navBarHeader);
	navFixed.append(container);
	header.append(navFixed);
	
	return header;
}

'use strict';
$.getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=ARstBy7ZbBhQXgzK2Ggf4NkvNwi4FM6MILFo0N9EJCRuwuA9dgAAAAA&fields=id%2Cname%2Curl%2Cdescription%2Ccreator%2Ccreated_at%2Ccounts%2Creason%2Cprivacy%2Cimage', (data)=>{
	console.log(data);
});