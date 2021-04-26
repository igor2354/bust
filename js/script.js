document.addEventListener(
	"DOMContentLoaded",
	function () {
        const sliderRecomend = new Swiper('.slider-recommend', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: '.slider-recommend__next',
                prevEl: '.slider-recommend__prev',
            },

            breakpoints: {
                500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },

                768: {
                  slidesPerView: "auto",
                  spaceBetween: 10,
                },
              }
        });
    },
	false
);

$(document).ready(function () {
    $(".products-promocode__name").on("click", function() {
        if ($(this).parent().hasClass("active")) {
            $(this).parent().removeClass("active");
            $(this).next().slideUp();
        } else {
            $(this).parent().addClass("active");
            $(this).next().slideDown();
        }

    });
});