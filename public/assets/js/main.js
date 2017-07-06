//Definimos la función de Get Json para consumir las apis
'use strict';
const getJSON = (url, cb) => {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {

        if (xhr.status !== 200) {
            return cb(new Error('Error loading JSON from ' + url + '(' + xhr.status + ')'));
        }

        cb(null, xhr.response);
    });

    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
};


"use strict";

const Board = () => {

	const container = $('<div class="container"></div>');



//Obtenemos los pines

getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=Ae3_9KkCE0V7iUlhrs5Csca31GWQFM4uyW3yZLhEItxdfcArQQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmedia%2Cmetadata%2Cboard%2Ccounts%2Coriginal_link%2Ccolor%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {
		if (err) { return alert(err.message);}
		state.board1 = json;
        console.log(state.board1);


getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?cursor=LT41MjM0NzMxNTY2NjQ5MjE1OTA6MjV8MWQ3ODJlNDY4YWJiNDNhMDNhZThmNTI4OGViNDYyNGY0NzFjNWFjY2VlMWUzMTg1NGM3M2Q2ZWM1ODE5ZDI0NQ%3D%3D&access_token=AaTD9jOnADnMlgwLbCXLx-V4_FB3FM6UWL-FwaFEIu4X1ABEigAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cboard%2Cattribution%2Cmedia%2Cmetadata%2Ccolor%2Ccounts%2Coriginal_link%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {
		if (err) { return alert(err.message);}
		state.board2 = json;
        console.log(state.board2);
		
		state.board = $.merge(state.board1.data,state.board2.data);

		jQuery.each(state.board,(i,val)=>{
			container.append('<div class="pin col-lg-2"></div>');
			container.children().eq(i).append(`<img class="pin__itemImg" src="${val.image.original.url}"/>`);
			container.children().eq(5).css('clear','both');
			if(val.metadata.hasOwnProperty('article')){
			container.children().eq(i).append(`<h1 class="pin__itemTitle">${val.metadata.article.name}</h1>`);
			}
			container.children().eq(i).append(`<p class="pin__itemNote">${val.note}</p>`);	
			

		
			
			console.log(val.image.original.url);




		})
		
		

		
		console.log(state.board);		
	
});	
		
	});	
		




	return container;
};






'use strict';
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.window) {
    case null:
              wrapper.append(Board());
      break;
    case 1:
            wrapper.append(RegisterNumber());

      break;
    
}


  root.append(wrapper);

}

//Definimos las variables globales para los componentes

const state = {
  window:null,
  user: null,
  board:null,

 
}



$( _ => {

	const root = $('.root');
	state.doRender = render.bind(null,root);

getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=ASmqb97ggeIaM18Y4T-0dv_E0Gf3FM6RYQp1a4JEIu4X1ABEigAAAAA&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason', (err, json) => {
		if (err) { return alert(err.message);}
		state.user = json;
		//Datos para el componenente Front-page
        console.log(state.user.data);
    	 });



	




	render(root);


});