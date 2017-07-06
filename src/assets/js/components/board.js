//Creación del primer componente board
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
