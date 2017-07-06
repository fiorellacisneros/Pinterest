'use strict';

const BoardImage = (data) => {
    const container = $('<div class="container"></div>');
    
    const front = $('<div class="front"></div>');
    const shared = $('<i class="icon-share-alternitive"></i>');
    const quit = $('<button class="quit">Dejar de seguir tablero</button>');
    const titleboard = $('<h1>'+ state.data.data[0].board.name +'<h1>');
    const pines = $('<p><strong>'+ state.data.data.length +'</strong> Pines</p><p><strong>84 </strong>Seguidores</p>');
    
    const board = $('<div class="board"></div>');
    const contuser = $('<div class="board-contuser"></div>');
    //const imguser = $('<img class="board-user" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_30.jpg">');
    const continfo = $('<div class="board-contuser-info "></div>');
    const user = $('<div class="board-font-bold">'+ state.data.data[0].creator.first_name+'</div>');
    const nameboard = $('<div>'+ state.data.data[0].board.name+'</div>');
    
    front.append(shared);
    front.append(titleboard);
    front.append(pines);
    container.append(front);
    
    jQuery.each(state.data.data,function(i,val){
        container.append(board);
        board.append('<img class="board">');
        //board.append('<h5></h5>');
        board.children().eq(i).attr('src',val.image.original.url);
        board.children().eq(i).attr('class','board-image');
        //board.children().eq(i).append('<h5 class="board-font-bold"></h5>');
        //board.children().find('h5.board-font-bold').eq(i).text(val.metadata.article.name);
        /*board.append('<p></p>');
        board.children().eq(i).append('<p class="board-note"></p>');
        board.children().find('p.board-note').eq(i).text(val.note);
        board.children().eq(i).attr('src', 'https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_30.jpg');
        contuser.children().eq(i).attr('class', 'board-user');
        continfo.children().eq(i).append('<div class="board-font-bold"></div>');
        continfo.children().find('div.board-font-bold').eq(i).text(val.creator.first_name);*/

    });

    return container;
};
