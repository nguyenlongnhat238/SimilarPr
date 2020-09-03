$(document).ready(function(){

    $(window).scroll(function(){
        var t = $(this).scrollTop()
        if(t > 10)
            $("#navmenu").animate({
                'background-color' : 'none'
            })
        else
            $("#navmenu").animate({
                'background-color' : 'rgba(0, 0, 0, 0.4)'
            })
    })    
})