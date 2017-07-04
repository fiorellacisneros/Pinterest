'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    wrapper.append(Board());
    
    root.append(wrapper);
};

const state = {
    data: null
};

$( _ => {
    /*
    getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AQtP4eYn4slRGkv9hSACd-EG5l3QFM4pAPpsbrxEItxdfcArQQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cboard%2Ccounts%2Ccolor%2Ccreated_at%2Ccreator%2Cimage%2Cmedia%2Cmetadata%2Coriginal_link', (err, json) => {

        if (err) { return alert(err.message);}*/

    getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=Ae3_9KkCE0V7iUlhrs5Csca31GWQFM4uyW3yZLhEItxdfcArQQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cattribution%2Cmedia%2Cmetadata%2Cboard%2Ccounts%2Coriginal_link%2Ccolor%2Ccreated_at%2Ccreator%2Cimage', (err, json) => {

        if (err) { return alert(err.message);}

        state.data = json;
        //console.log(json);
        const root = $('.root');
        render(root);
    });

});