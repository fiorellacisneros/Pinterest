'use strict';

const Board = (data) => {
    const container = $('<div class="container"></div>');
    const board = $('<div class="board"></div>');
    const image = $(`<a href="#"><img class="board-image" src=" ${state.data.data[0].image.original.url}"/></a>`);
    const title = $('<h5 class="board-font-bold">'+ state.data.data[0].metadata.article.name +'</h5>');
    const note = $('<p>'+ state.data.data[0].note+'</p>');
    const contuser = $('<div class="board-contuser"></div>');
    const imguser = $('<img class="board-user" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_30.jpg">');
    const continfo = $('<div class="board-contuser-info "></div>');
    const user = $('<div class="board-font-bold">'+ state.data.data[0].creator.first_name+'</div>');
    const nameboard = $('<div>'+ state.data.data[0].board.name+'</div>');
    
    container.append(front);
    board.append(image);
    //board.append(title);
    board.append(note);
    continfo.append(user);
    continfo.append(nameboard);
    contuser.append(imguser);
    contuser.append(continfo);
    board.append(contuser);
    container.append(board);

    return container;
};

