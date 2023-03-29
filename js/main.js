$(window).scroll(function(){

    if($(window).scrollTop() > 0){
        $('.navbar').css('background', '#2d272b');
    } else{
        $('.navbar').css('background', 'transparent');
    }
})

//reviews
$('.reviews-sider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items: 1,
    smartSpeed:600,
})

//Blog
$('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    smartSpeed:600,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})