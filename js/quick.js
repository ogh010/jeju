$(function(){
    var open = true;
    $('.btnQuickMenu').click(function(){
        if(open){
            $(this).css("right","300px");
            $('.btnContainer').css("right","0");
            open = false;
        }
        else{
            $(this).css("right","0px");
            $('.btnContainer').css("right","-300px");
            open = true;
        }
    })
})

        $(function(){
            var open=false;                                 
            $('.topMenu #bars02').click(function(){
                if(open){
                    $('.overlay').height(0);
                    open=false;
                }else{
                    $('.overlay').height('100%');
                    open=true;
                }                    
            })
            
        }) 