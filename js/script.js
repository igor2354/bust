document.addEventListener(
	"DOMContentLoaded",
	function () {
		const sliderRecomend = new Swiper(".slider-recommend", {
			slidesPerView: "auto",
			spaceBetween: 10,
			navigation: {
				nextEl: ".slider-recommend__next",
				prevEl: ".slider-recommend__prev",
			},
		});
	},
	false
);

$(document).ready(function () {
	$(".products-promocode__name").on("click", function () {
		if ($(this).parent().hasClass("active")) {
			$(this).parent().removeClass("active");
			$(this).next().slideUp();
		} else {
			$(this).parent().addClass("active");
			$(this).next().slideDown();
		}
	});

	let match = window.matchMedia("(max-width: 768px)");

	function fixedButton() {
		if (match.matches) {
			$(window).on("resize, load", function () {
				let elHeight = $(".basket-products__list").height();
				let windowHeight = $(window).height();

				if (elHeight > windowHeight) {
					$(".products-result__button").addClass("fixed");

					$(window).on("scroll", function () {
						$(window).scroll(function () {
							var wt = $(window).scrollTop();
							var wh = $(window).height();
							var et = $(".products-result").offset().top;
							var eh = $(".products-result").outerHeight();
							var dh = $(document).height();
							if (wt + wh >= et || wh + wt == dh || eh + et < wh) {
								$(".js-button-order").removeClass("fixed");
							} else {
								$(".js-button-order").addClass("fixed");
							}
						});
					});
				} else {
					$(".js-button-order").removeClass("fixed");
				}
			});

			$(".products-promocode").addClass("active");
			$(".products-promocode__from").slideDown();
		} else {
			$(".js-button-order").removeClass("fixed");

			$(".products-promocode").removeClass("active");
			$(".products-promocode__from").slideUp();
		}
	}

	fixedButton();
	match.addListener(fixedButton);
});
