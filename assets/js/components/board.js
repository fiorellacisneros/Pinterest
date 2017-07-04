'use strict';

const Board = (data) => {
    const container = $('<div class="container"></div>');
    const board = $('<div class="board"></div>');
    const image = $(`<img class="board-image" src=" ${state.data.data[0].image.original.url}"/>`);
    const info = $('<h3>'+ state.data.data[0].metadata.article.name+'</h3>');
    const note = $('<p>'+ state.data.data[0].note+'</p>');
    const contuser = $('<div class="board-cont-user"></div>');
    const imguser = $('<img class="board-user" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_30.jpg">');
    const user = $('<span>'+ state.data.data[0].creator.first_name+'</span><br>');
    const nameboard = $('<span>'+ state.data.data[0].board.name+'</span>');
    
    board.append(image);
    board.append(info);
    board.append(note);
    contuser.append(imguser);
    contuser.append(user);
    contuser.append(nameboard);
    board.append(contuser);
    container.append(board);
    
    return container;
}