const Scroll = () => {
    const contscroll = $('<div class="scroll"></div>')
    const shared = $('<div class="scroll__ico"><i class="icon-share-alternitive"></i></div>');
    const quit = $('<button type="button" class="weight-800 btn right">Dejar de seguir tablero</button>');
    
    contscroll.append(shared);
    contscroll.append(quit);
    
    return contscroll;
} 