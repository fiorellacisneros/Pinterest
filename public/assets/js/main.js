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

//Creación del primer componente board

"use strict";

const Board = () => {
	const container = $('<div class="container"></div>');
	
	//Obtenemos los pines

	getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=ATPBRlsxT17ZvaWKDqy6vi9qC2MKFM6vxZNoFEFEItxdfcArQQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmedia%2Cmetadata%2Ccolor%2Ccounts%2Coriginal_link%2Cboard%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {
		if (err) { return alert(err.message);}
		state.board1 = json;
        console.log(state.board1);


		getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?cursor=LT41MjM0NzMxNTY2NjQ5MjE1OTA6MjV8MWQ3ODJlNDY4YWJiNDNhMDNhZThmNTI4OGViNDYyNGY0NzFjNWFjY2VlMWUzMTg1NGM3M2Q2ZWM1ODE5ZDI0NQ%3D%3D&access_token=ATPBRlsxT17ZvaWKDqy6vi9qC2MKFM6vxZNoFEFEItxdfcArQQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmedia%2Cmetadata%2Ccolor%2Ccounts%2Coriginal_link%2Cboard%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {
			if (err) { return alert(err.message);}
			state.board2 = json;
        	console.log(state.board2);
			state.board = $.merge(state.board1.data,state.board2.data);

			jQuery.each(state.board,(i,val)=>{
				container.append(`<div class="pin col-lg-2" data-toggle="modal" data-target="#myModal" data-id=${val.id}></div>`);
				container.children().eq(i).append(`<img class="pin__itemImg" src="${val.image.original.url}"/>`);
				container.children().eq(5).css('clear','both');
				if(val.metadata.hasOwnProperty('article')){
					container.children().eq(i).append(`<h1 class="pin__itemTitle">${val.metadata.article.name}</h1>`);
				}
				container.children().eq(i).append(`<p class="pin__itemNote">${val.note}</p>`);
				container.children().eq(i).append(`<span class="pin__itemBoardName">${val.board.name}</span>`);
				container.children().eq(i).append(User());
			
				
			})
				    
		});	
		
	});	
		return container;
};


"use strict"
const User = () => {

	const userData = $('<div class="user"></div>')
	

 getJSON('https://api.pinterest.com/v1/users/arabelyuska/?access_token=ATPBRlsxT17ZvaWKDqy6vi9qC2MKFM6vxZNoFEFEItxdfcArQQAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Caccount_type%2Cbio%2Cusername%2Ccounts%2Ccreated_at%2Cimage', (err, json) => {
		if (err) { return alert(err.message);}
		state.user = json;
		console.log(state.user.data.first_name);
		console.log(state.user.data.image['60x60'].url);

		userData.append(`<img class="user__itemImg" src="${state.user.data.image['60x60'].url}">`);
		userData.append(`<span class="user__itemName">${state.user.data.first_name}<span>`);
	});
	
	return userData;
}


"use strict"
const Modal = (dataPin) =>{
console.log(dataPin);


const modal =  $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" ></div>');
const modal_dialog = $('<div class="modal-dialog" role="document></div>');
const modal_content = $('<div class="modal-content"></div>');
const modal_header = $('<div class="modal-header">Hola</div>');
const button_header = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close">cerrar</button>');
const span = $('<span aria-hidden="true">&times;</span>');
const modal_body = $('<div class="modal-body">....</div>');
const modal_footer = $('<div class="modal-footer"></div>');
const button_footer = $('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>');




modal_dialog.append(modal_content);
modal_content.append(modal_header);
modal_header.append(button_header);
button_header.append(span);
modal_content.append(modal_body);
modal_content.append(modal_footer);
modal_footer.append(button_footer);
modal.append(modal_dialog);


modal.on('show.bs.modal',(e)=>{



	  var pinId = $(e.relatedTarget).attr('data-id');
	  console.log(pinId);

	getJSON(`https://api.pinterest.com/v1/pins/${pinId}/?access_token=ATPBRlsxT17ZvaWKDqy6vi9qC2MKFM6vxZNoFEFEItxdfcArQQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmedia%2Cboard%2Cmetadata%2Ccolor%2Ccounts%2Ccreated_at%2Coriginal_link%2Ccreator`, (err, json) => {
			if (err) { return alert(err.message);}
			console.log(json);
		$(e.currentTarget).append(Modal(json.data));
	})


})

modal.on('show.bs.modal',(e)=>{
	console.log('el modal se esta cerando');
	//$(e.currentTarget).text('hola');

});




return modal;




}









'use strict';
const root = $(".root");
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  switch (state.window) {
    case null:
              wrapper.append(Board());
			  wrapper.append(Modal());
			  
			  
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


	render(root);


});