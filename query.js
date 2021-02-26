$(document).ready(function(){

    $(document).on('click','.section3 .select_menu ul li',function(){
        var currentid =$(this).attr('data-id');
        $(' .section3 .select_menu ul li,.items_selectmenu .items_menu').removeClass('active');
        $(' .section3 .select_menu ul li[data-id="'+currentid+'"],.items_selectmenu .items_menu[data-menu="'+currentid+'"]').addClass('active');
    });

    $("#product_header_slide").lightSlider({
            adaptiveHeight:true,
            item:1,
            speed:1000,
            auto: true,
            loop:true,
            slideEndAnimation: true,
            pause:3000,
            sliderMargin:0,
            addClass:'',
            mode:"fade",
            useCSS: true,
            cssEasing:'ease',
            easing:'linear',
    });
        $("#topproudct_slide").lightSlider({
            adaptiveHeight:true,
            item:1,
            speed:1000,
            auto: true,
            loop:true,
            controls:false,
            slideEndAnimation: true,
            pause:4000,
            sliderMargin:10,
            addClass:'',
            mode:"slide",
            useCSS :true,
            cssEasing:'ease',
            easing:'linear',
            pager:false,
            adaptiveHeight:true,
            responsive:[
                {
                    breakpoint:450,
                    settings:{
                        item:2
                    }
                }
            ]

        });

            



    });

    
    $(document).ready(function(){
    $("#slider").lightSlider()
    });