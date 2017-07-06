const frontPage = () => {
    const front = $('<div class="front"></div>');
    const titleboard = $('<h1 class="front__title weight-800">'+ state.data.data.name +'<h1>');
    const pines = $('<p class="front__pines"><strong>'+ state.data.data.counts.pins +'</strong> Pines</p>');
    const followers = $('<p class="front__pines"><strong>'+ state.data.data.counts.followers +'</strong> Seguidores</p>');
    const imguserprinc = $('<img class="front__userprinc" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_75.jpg">');
    
    front.append(titleboard);
    front.append(pines);
    front.append(followers);
    front.append(imguserprinc);
    
    return front;
}