$(window).on("scroll", function() {
    /**Fixed header**/
    if ($(window).scrollTop() > 70) {
        $(".wrg-header").addClass("sticky");
    } else {
        $(".wrg-header").removeClass("sticky");
    }
});

$(".wrg-vitamin").slick({
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    speed: 300,
    infinite: false,
    responsive: [{
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
        },
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        },
    }, ],
});