'use strict';

const render = (root) => {
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //Componentes
    wrapper.append(Scroll());
    wrapper.append(frontPage());
    
    root.append(wrapper);
};

const state = {
    data: null
};

$( _ => {
    
    getJSON('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AT9rzjJsDsmyps0SBDfKAUiVAU_hFM6l7xHG0ThEJCRuwuA9dgAAAAA&fields=id%2Cname%2Curl%2Ccounts%2Ccreated_at%2Ccreator%2Cdescription%2Cimage%2Cprivacy%2Creason', (err, json) => {

        if (err) { return alert(err.message);}

        state.data = json;
        const root = $('.root');
        render(root);
    });

});