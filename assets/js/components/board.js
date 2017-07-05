'use strict';

const Board = (data) => {
    const container = $('<div class="container"></div>');
    const board = $('<div class="board"></div>');
    /*
    const image = $(`<img class="board-image" src=" ${state.data.data[0].image.original.url}"/>`);
    */
    const title = $('<h5 class="board-font-bold">'+ state.data.data[0].metadata.article.name+'</h5>');
    const note = $('<p>'+ state.data.data[0].note+'</p>');
    const contuser = $('<div class="board-contuser"></div>');
    const imguser = $('<img class="board-user" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_30.jpg">');
    const continfo = $('<div class="board-contuser-info "></div>');
    const user = $('<div class="board-font-bold">'+ state.data.data[0].creator.first_name+'</div>');
    const nameboard = $('<div>'+ state.data.data[0].board.name+'</div>');


    //board.append(image);
    board.append(title);
    board.append(note);
    continfo.append(user);
    continfo.append(nameboard);
    contuser.append(imguser);
    contuser.append(continfo);
    board.append(contuser);
    container.append(board);

    jQuery.each(state.data.data,function(i,val){
        board.append('<img class="board-img">');
        console.log(board.children().length);
        board.children().eq(i).attr('src',val.image.original.url);
        //console.log(val.image.original.url);
    });

    return container;
};


