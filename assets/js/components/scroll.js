const Scroll = () => {
    const contscroll = $('<div class="contscroll"></div>');
    const fixed = $('<div class="contscroll__fixed"></div>');
    const shared = $('<div class="contscroll__fixed--ico"><i class="icon-share-alternitive"></i></div>');
    const nameboard = $('<span class="nameboard weight-800">'+ state.data.data.name+'</span>')
    const quit = $('<button type="button" class="weight-800 contscroll__fixed__btn btn right">Dejar de seguir tablero</button>');


    fixed.append(shared);
    fixed.append(nameboard);
    fixed.append(quit);
    contscroll.append(fixed);

    $(document).ready(function(){
        $('.nameboard').css({"opacity":0});
        $(document).scroll(function(){
            if($(window).scrollTop()>45){
                $('.nameboard').show();
                $('.nameboard').css({"transform": "translate(0, 20px)"});
                $('.nameboard').css({"transition": "300ms ease-out"});
            }else{
                $('.nameboard').hide();
                $('.nameboard').css({"opacity":1});
                $('.nameboard').css({"font-size": "27px"});
                $('.nameboard').css({"transform": "translate(0, 0)"});
                $('.nameboard').css({"transition": "300ms ease-out"});
            } 
        });
    });
    return contscroll;
} 