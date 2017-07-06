const Scroll = () => {
    const contprincipal = $('<div class="contprinc"></div>');
    const contscroll = $('<div class="contscroll hidden-xs"></div>');
    const fixed = $('<div class="contscroll__fixed"></div>');
    const shared = $('<div class="contscroll__fixed--ico"><i class="icon-share-alternitive"></i></div>');
    const nameboard = $('<span class="contscroll__fixed--nameboard weight-800">'+ state.data.data.name+'</span>')
    const quit = $('<button type="button" class="weight-800 contscroll__fixed--btn btn btn-default right">Dejar de seguir tablero</button>');
    const contleft = $('<div class="contleft"></div>');
    const left = $('<button type="button" class="weight-800 contleft__btn visible-xs btn btn-default">Dejar de seguir tablero</button>');
    
    fixed.append(shared);
    fixed.append(nameboard);
    fixed.append(quit);
    contscroll.append(fixed);
    contprincipal.append(contscroll);
    contleft.append(left);
    contprincipal.append(contleft);

    $(document).ready(function(){
        $('.contscroll__fixed--nameboard').css({"opacity":0});
        $(document).scroll(function(){
            if($(window).scrollTop()>30){
                $('.contscroll__fixed--nameboard').show();
                $('.contscroll__fixed--nameboard').css({"transform": "translate(0, 20px)"});
                $('.contscroll__fixed--nameboard').css({"transition": "300ms ease-out"});
            }else{
                $('.contscroll__fixed--nameboard').hide();
                $('.contscroll__fixed--nameboard').css({"opacity":1});
                $('.contscroll__fixed--nameboard').css({"font-size": "27px"});
                $('.contscroll__fixed--nameboard').css({"color": "#555"});
                $('.contscroll__fixed--nameboard').css({"margin-left": "120px"});
                $('.contscroll__fixed--nameboard').css({"transform": "translate(0, 0)"});
                $('.contscroll__fixed--nameboard').css({"transition": "300ms ease-out"});
                $('.contscroll__fixed--nameboard').css({"letter-spacing": "-1px"});
            } 
        });
    });
    return contprincipal;
} 