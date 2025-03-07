// const { on } = require("gulp");
var noveltySlider;
var figureSlider3;
function figureslider3Init (figureSlider3) {
	figureSlider3 = new Swiper('.figure3-slider', {
		speed: 400,
		spaceBetween: 25,
		loop: true,
		navigation: {
			nextEl: '.figure3-swiper-button-next',
			prevEl: '.figure3-swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 4,
			},
			0: {
				slidesPerView: 2,
				spaceBetween: 5,
			},
		}
	});
	return figureSlider3;
}
$(document).ready(function () {

	$(window).scroll(function() {
		if($(this).scrollTop() > 200) 
			$('.media-infinity-footer__up').fadeIn();
		else 
			$('.media-infinity-footer__up').fadeOut();
	});
	 
	$('.media-infinity-footer__up').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	
	$('.header .notify .fancybox-close-small').click(function(){
		$('.header .notify').hide();
	});
	
	/*
	if(localStorage.getItem('notify') != "1") {
		$.magnificPopup.open({
			items: {
				src: '#notify-modal',
				type: "inline"
			},
		});
		
		localStorage.setItem('notify', '1');
	}
	*/

	$('.gallery').each(function () {
		$(this).magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			delegate: 'a',
			mainClass: 'mfp-no-margins mfp-with-zoom',
			image: {
				verticalFit: true
			},
			gallery: {
				enabled: true
			}

		});
	});
	
	let wd = $('#cart-without-discount').text();
	let d = $('.cart__total-price[data-entity="basket-total-price"]').text();
	
	if(wd == d) $('#cart-without-discount').hide();
	

	$('#modal-test-hide').on('click', function () {
		$.magnificPopup.close();
		localStorage.setItem('modal-test', 'false')
	});

	$('.header__catalog').on('click', function () {
		$('.popup-menu').addClass('popup-menu_active');
	});
	$('.header__catalog_popup').on('click', function () {
		$('.popup-menu').removeClass('popup-menu_active');
	});

	// фиксированный header
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$(".header").css({
				"background-color": "#fff"
			});
		} else {
			$(".header").css({
				"background": "transparent",
				"box-shadow": "none"
			});
		}
	});

	$('.similar-slider, .novelty-slider').slick({
		infinite: true,
		slidesToShow: 3,
		responsive: [{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		],
		slidesToScroll: 1,
		prevArrow: '.novelty-swiper-button-prev1',
		nextArrow: '.novelty-swiper-button-next1'
	});

	$('.similar-slider2, .novelty-slider2').slick({
		infinite: true,
		slidesToShow: 3,
		responsive: [{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			}
		],
		slidesToScroll: 1,
		prevArrow: '.novelty-swiper-button-prev2',
		nextArrow: '.novelty-swiper-button-next2'
	});

	$('.novelty-slider-textile').each(function(key, item) {

		var sliderIdName = 'slider-textile' + key;

		var sliderId = '#' + sliderIdName;

		console.log($(sliderId).length);
		$(sliderId).slick({
			infinite: true,
			slidesToShow: 3,
			responsive: [{
				breakpoint: 1000,
				settings: {
					slidesToShow: 2,
				}
			},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						centerMode: true
					}
				}
			],
			slidesToScroll: 1,
			prevArrow: '.novelty-swiper-button-prev-'+ key,
			nextArrow: '.novelty-swiper-button-next-'+ key,
			//asNavFor: sliderId
		});


	});

	// Слайдер в секции .novelty на главной
	

	var shops = new Swiper('.shops__item-slider', {
		speed: 400,
		spaceBetween: 25,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 1,
			},
			720: {
				slidesPerView: 1,
			},
			300: {
				slidesPerView: 1,
			},
		}
	});
	// Слайдер в секции .yt на главной
	var ytSlider = new Swiper('.yt-slider', {
		speed: 400,
		loop: true,
		spaceBetween: 43,
		slidesPerView: 1,
		navigation: {
			nextEl: '.yt-swiper-button-next',
			prevEl: '.yt-swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 3,
			},
			720: {
				slidesPerView: 2,
			},
			300: {
				slidesPerView: 1,
			},
		}
	});
	var ytSlider = new Swiper('.yt-slider', {
		speed: 400,
		loop: true,
		spaceBetween: 43,
		slidesPerView: 1,
		navigation: {
			nextEl: '.yt-swiper-button-next',
			prevEl: '.yt-swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 3,
			},
			720: {
				slidesPerView: 2,
			},
			300: {
				slidesPerView: 1,
			},
		}
	});
	if (window.screen.availWidth <= 720) {
		var hbSlider = new Swiper(".hassbook-slider", {
			speed: 400,
			loop: true,
			spaceBetween: 43,
			slidesPerView: 1,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
		    },
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		})
	}

	// Слайдер с видом товара
	// Миниатюры
	/**	var productThumbs = new Swiper('.product-slider-thumbs', {
			direction: 'vertical',
			spaceBetween: 20,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
	
		// Основной слайдер
		var productSlider = new Swiper('.product-slider', {
			direction: 'vertical',
			speed: 400,
			spaceBetween: 20,
			freeMode: true,
			mousewheel: true,
			thumbs: {
				swiper: productThumbs
			}
		});
	**/
	// Слайдер на странице товара секции figure
	var figureSlider = new Swiper('.figure-slider', {
		speed: 400,
		spaceBetween: 25,
		loop: true,
		navigation: {
			nextEl: '.figure-swiper-button-next',
			prevEl: '.figure-swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 2,
			},
			720: {
				slidesPerView: 2,
			},
			300: {
				slidesPerView: 1,
			},
		}
	});
	// Слайдер на странице товара секции figure1
	var figureSlider1 = new Swiper('.figure1-slider', {
		speed: 400,
		spaceBetween: 25,
		loop: true,
		navigation: {
			nextEl: '.figure1-swiper-button-next',
			prevEl: '.figure1-swiper-button-prev',
		},
		breakpoints: {
			// when window width is >= 320px
			1200: {
				slidesPerView: 3,
			},
			720: {
				slidesPerView: 2,
			},
			300: {
				slidesPerView: 1,
			},
		}
	});
	// Слайдер на странице товара секции figure

	// nice-select

	if($('select').length){
		$('select').niceSelect();
	}

	// Аккордеон на странице товара

	$(".product__accordion-header").on('click', function () {
		$(this).siblings(".product__accordion-body").slideToggle();
		$(this).toggleClass("active");
	});

	$(".link__accordion-header").on('click', function () {
		$(this).siblings(".link__accordion-body").slideToggle();
		$(this).toggleClass("active");
	});

	// Кнопка "в желаемое" на странице каталога

	$(".novelty__card-icon-wrapper").on('click', function () {
		$(this).toggleClass("active");
	});

	$(".product__button_like").on('click', function (e) {
		$(this).toggleClass("active");
	});

	$("#card-modal_close").on('click', function (e) {
		$.fancybox.close();
	});

	if($(".link-modal").length){
		$(".link-modal").fancybox();
	}

	$(".call-modal-btn").on("click", function () {
		$.magnificPopup.open({
			items: {
				src: '#call-modal',
				type: "inline"
			},
		});
	})
	$(".personal-reviews__btn").on("click", function () {
		$.magnificPopup.open({
			items: {
				src: '#reviews-modal',
				type: "inline"
			},
		});
	})
	$("#send-call-modal").on("click", function (e) {
		let phone = $("#call-modal__nmb").val()
		if (!phone) {
			$(".call-modal-error").text("Введите номер")
			$(".call-modal-answer").hide()
		} else {
			$.ajax({
				type: "POST",
				url: "/local/templates/HassFashion/ajax/forms/call-form.php",
				data: {
					phone: phone,
				},
				success: function (data) {
					$(".call-modal-error").hide()
					$(".call-modal-answer").text("Отправлено")
				}
			});
		}
	})

	$("#return-form-send").on("click", function (e) {
		let id = $("#return-form-id").val()
		let comment = $("#return-form-comment").val()
		if (!id) {
			$(".call-modal-error").text("Введите номер заказа")
			$(".call-modal-answer").hide()
			return
		}
		if (!comment) {
			$(".call-modal-error").text("Введите комментарий")
			$(".call-modal-answer").hide()
			return
		} else {
			$.ajax({
				type: "POST",
				url: "/local/templates/HassFashion/ajax/forms/return-form.php",
				data: {
					id: id,
					comment: comment
				},
				success: function (data) {
					$(".call-modal-error").hide()
					$(".return-form").text("Отправлено")
					ingEvents.Event({category:'forms', action:'submit', label:'feedback_submit', goalParams:{}});
					ingEvents.dataLayerPush('dataLayer', {'event': 'feedback_submit'});
				}
			});
		}

	})

	$("#add-btn-popup").on('click', function (e) {
		const srcItem = $('.product__slider-wrapper.slider').filter(function () {
			return $(this).css('display') == 'flex';
		});

		const srcImg = $(srcItem).find(".swiper-slide-active img").attr("src")
		const price = $(".product__price-wrapper .product__price").text();
		const size = $(".block_size.selected").attr("title");
		const color = $(".block_color.selected").attr("titleColor");
		if (size) {
			$(".card-modal__size").text("размер: " + size)
		}
		if (size) {
			$(".card-modal__size").text("размер: " + size)
			$(".card-modal__color").text("цвет: " + color)
		}
		$(".card-modal__price").text("цена: " + price)
		$("#card-modal__img").attr("src", srcImg);
		figureslider3Init(figureSlider3);
	});

	//search
	$("#search-button").on('click', function (e) {
		$(".search-wrapper").show()
	});
	$(document).mouseup(function (e) {
		var container = $(".search-wrapper");
		if (container.has(e.target).length === 0) {
			container.hide();
		}
	});

	//color-detail
	$(".block_color").on('click', function (e) {
		const color = $(".block_color.selected").attr("titleColor").toLowerCase();
		$("#detail-element-color").text(color)
	});

	// footer-form
	$(document).on('click', '.footer__form .footer__button', function (e) {
		e.preventDefault();
		let form = $(this).closest('.footer__form');
		const email = $("input", form).val();
		const errorWrap = $("#footer-error-wrap", form);
		if (email) {
			$.ajax({
				type: "POST",
				url: "/local/templates/HassFashion/ajax/forms/footerform.php",
				data: {
					email: email,
				},
				success: function (answer) {
					ingEvents.listTrackers();
					ingEvents.Event({category:'forms', action:'submit', label:'subscribe', ya_label:'subscribe', goalParams:{}});					
					ingEvents.dataLayerPush('dataLayer', {'event': 'subscribe'});
					//ingEvents.GAEvent({category:'forms', action:'submit', label:'subscribe'})
					var _tmr = window._tmr || (window._tmr = []);
					_tmr.push({
						"type": "reachGoal",
						"id": 3567381,
						"goal": "subscribe",
					});

					ClTrack("addClientInfo", {
						email: email,
						subscribed: true
					});
					$.magnificPopup.open({
						items: {
							src: '#footer-form_sucess',
							type: "inline"
						},
					});
					$.fancybox.close();
				}
			});
		} else {
			errorWrap.text("Заполните поле email")
		}
	});

	BX.addCustomEvent('onAjaxSuccess', function () {
		if (!$('#soa-property-3').val()) {
			$('#soa-property-3').mask('+7 (000) 000 00 00', {
				placeholder: "+7 (___) ___ __ __"
			});
		}
	});


	$('.scroll-link').on('click', function () {

		let href = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(href).offset().top - 120
		}, {
			duration: 370, // по умолчанию «400» 
			easing: "linear" // по умолчанию «swing» 
		});

		return false;
	});

	// Фикс сайдбар
	$(function () {
		var $window = $(window);
		var $sidebar = $("main-catalog .sidebar__inner");
		try {
			if ($sidebar.length) {
				var $sidebarTop = $sidebar.position().top;
				var $sidebarHeight = $sidebar.height();
				var $footer = $('.footer');
				var $footerTop = $footer.position().top;
				$sidebar.addClass("fixed");

				$window.scroll(function (event) {
					var $scrollTop = $window.scrollTop();
					var $topPosition = Math.max(0, $sidebarTop - $scrollTop) + 117;

					if ($scrollTop + $sidebarHeight > $footerTop) {
						var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight);
					}

					$sidebar.css("top", $topPosition);
				});
			}
		} catch(e){
			console.log(e)
		}
	});

	$(".shops_map").on('click', function (e) {
		let shop = $(e.target).closest(".shops__item")
		if (!shop.hasClass("map")) {
			shop.find(".shops__item-slider").hide()
			shop.find(".shops__item-map").show()
			shop.addClass("map")
		} else {
			shop.find(".shops__item-slider").show()
			shop.find(".shops__item-map").hide()
			shop.removeClass("map")
		}
	});

	//type reviews
	$(".reviews__type-all").on('click', function (e) {
		$(".reviews__types .active").removeClass("active")
		$(e.target).addClass("active")
		$('.positive').show();
		$('.negative').show();
	});
	$(".reviews__type-positive").on('click', function (e) {
		$(".reviews__types .active").removeClass("active")
		$(e.target).addClass("active")
		$('.positive').show();
		$('.negative').hide();
	});
	$(".reviews__type-negative").on('click', function (e) {
		$(".reviews__types .active").removeClass("active")
		$(e.target).addClass("active")
		$('.positive').hide();
		$('.negative').show();
	});


	//rate-reviews
	$(".reviews-modal__rate-list .reviews-modal__rate-item ").on('click', function (e) {
		const rate = $(e.target).text()
		$(".reviews-modal__rate-list .active").removeClass("active")
		$(e.target).addClass("active")
		$(".reviews-modal__rate").text(rate)
	});
	$(".reviews-modal__btn").on('click', function (e) {
		const errorWrap = $(".reviews-modal__error");
		let rate = $(".reviews-modal__rate-list .active").text()
		rate = rate.replace(/\s/g, '');
		const review = $("#reviews-modal__text").val()
		const name = $("#reviews-modal__name").val()
		const city = $("#reviews-modal__city").val()
		const email = $("#reviews-modal__email").val()
		const nameProduct = $(".personal-reviews__btn").attr("name")
		const userId = $(".personal-reviews__btn").attr("userid")
		const idProduct = $(".personal-reviews__btn").attr("idproduct")
		if (email && rate && name && city && review) {
			$.ajax({
				type: "POST",
				url: "/local/templates/HassFashion/ajax/forms/review-form.php",
				data: {
					rate: rate,
					email: email,
					review: review,
					name: name,
					city: city,
					nameProduct: nameProduct,
					userId: userId,
					idProduct: idProduct
				},
				success: function (answer) {
					$(".reviews-modal__wrap").html('<div class="reviews-modal__answer">Мы благодарим вас за ваш отзыв. </div>')
				}
			});
		} else {
			errorWrap.text("Заполните все поля")
		}
	});


	oneColor = $('li.block_size');
	twoColor = $('.block_color.selected');
	zSizeValue = '';
	if (twoColor.length) {
		getTwoColor = twoColor[0].getAttribute('data-treevalue');
		for (zSize = 0; zSize < oneColor.length; zSize++) {
			zSizeValue = oneColor[zSize].getAttribute('idcolor');
			if (zSizeValue !== getTwoColor) {
				$('li.block_size:eq('+zSize+')').css('display', 'none');
			}
		}
	} else if (oneColor.length) {
		getOneColor = oneColor[0].getAttribute('idcolor');
		for (zSize = 0; zSize < oneColor.length; zSize++) {
			zSizeValue = oneColor[zSize].getAttribute('idcolor');
			if (zSizeValue !== getOneColor) {
				$('li.block_size:eq('+zSize+')').css('display', 'none');
			}
		}
	}

	
})
/*
изменение размера и цвета
*/
.on('click', '[data-offer-color]', function() {
	let th = $(this),
		id = th.data('offer-color'),
		name = String(th.attr('data-color')),
		size = th.closest('.product-item-offers').find('[data-offer-size]');
		slider = th.closest('.product-item-container').find('.data-color-img__items[data-color-img="' + name + '"] .custom-img-slider');
	
	th.closest('.product-item-container').find('.data-color-img__items').removeClass('data-color-img__item-active');
	th.closest('.product-item-container').find('.data-color-img__items[data-color-img="' + name + '"]').addClass('data-color-img__item-active');

	if (!slider.hasClass('swiper-container-initialized'))
		new Swiper(th.closest('.product-item-container').find('.data-color-img__items[data-color-img="' + name + '"] .custom-img-slider'), {
			slidesPerView: 1,
			pagination: {
				clickable: true,
				el: '.swiper-pagination',
			},
		});

	th.addClass('active');
	th.siblings().removeClass('active');
	size.removeClass('active');
	
	let count_size = 0;
	size.each(function(i,e) {
		let colorGroup = $(e).data('color-group').toString().split(",");
		switch(colorGroup.indexOf(id.toString())) {
			case -1:
				$(e).addClass('deactive');
				break;
			default:
				$(e).removeClass('deactive');
				count_size++;
				break;
		} 
	});
	
	if ($('.slider__item'+id).length > 0) {
		$('.detail_block-view .product__slider-wrapper').hide(0);
		$('.slider__item'+id).show(0);
		th.parent().prev().text('Цвет: '+th.text());
	}
	
	let curr = $(th.closest('.product-item-offers').find('[data-offer-size]:not(.deactive)')[0]);
	curr.trigger('click');

	if (count_size > 1) {
		let parent = th.closest(".product-item-container"),
			btn = parent.find(".product__button-item-add");
	
		if (btn.length > 0) {
			btn.attr("data-size-selected", "false").attr("data-size-select", "false")
		}
	}
})
.on('click', '[data-offer-size]', function() {
	let th = $(this),
			id = th.data('offer-size'),
			title = th.closest('[data-entity="item"]').find('[data-card-title]'),
			color = th.closest('[data-entity="item"]').find('.product-item-offers-li-color.active'),
			ids = [id, color.data('offer-color')],
			parent = th.closest(".product-item-container"),
			btn = parent.find(".product__button-item-add");
	
	if (btn.length > 0) {
		btn.attr("data-size-selected", "true").attr("data-size-select", "false");
	}
	
	title.find('span').remove();
	th.addClass('active');
	th.siblings().removeClass('active');
	title.append('<span> ('+th.text()+', '+color.text()+')</span>');
})
/*
добавление товаров на странице списка
*/
.on('click', '[data-product-id]', function() {
	let th = $(this),
		id = th.data('product-id'),
		ids = {
			color: th.closest('[data-entity="item"]').find('.product-item-offers-li-color.active').data('offer-color'),
			size: th.closest('[data-entity="item"]').find('.product-item-offers-li-size.active').data('offer-size')
		};

	$.ajax({
		url: '/local/templates/HassFashion/ajax/sale/add_to_cart.php',
		type: 'post',
		dataType: 'json',
		data: {
			data: {
				id: id,
				size: ids.size,
				color: ids.color
			}
		},
		success: function (s) {
			$.fancybox.open(s.html, {
				baseClass: "card-modal-fancywrapp",
				touch: false,
				afterShow: function (instance, current) {
					let cur_offer = current.$content.find(".product-item-offers__size.active");
					$('[data-prod-size="' + cur_offer.attr("data-prod-id") + '-' + cur_offer.attr("data-offer-size") + '"]').trigger('click');

					current.$content.find(".card-modal__size").on("click", '.product-item-offers__size', function () {
						//$('[data-prod-size="' + $(this).attr("data-prod-id") + '-' + $(this).attr("data-offer-size") + '"]').trigger('click');
						let parent = $(this).closest(".card-modal");
						let activ = parent.find(".product-item-offers__size.active");

						let title = parent.find(".card-modal__title");
						let text_title = title.text().replace(activ.text(), $(this).text());
						title.text(text_title);
					});
					current.$content.find(".card-modal__color").on("click", ".product-item-offers__color:not(.active)", function () {
						let parent = $(this).closest(".card-modal");
						let size = parent.find(".product-item-offers__size.active");
						$.ajax({
							url: '/local/templates/HassFashion/ajax/sale/add_to_cart.php',
							type: 'post',
							dataType: 'json',
							data: {
								data: {
									id: size.attr("data-prod-id"),
									size: size.attr("data-offer-size"),
									color: $(this).attr("data-offer-color"),
									set_color: true
								}
							},
							success: function (s) {
								if (s.status == 'ok') {
									let content = $.fancybox.getInstance().current.$content;
									content.find(".card-modal__name").html(s.name);
									content.find(".card-modal__title").html(s.title);
									content.find(".card-modal__artic").html(s.art);
									content.find(".card-modal__color").html(s.color);
									content.find(".card-modal__size").html(s.size);
									content.find(".card-modal__price").html(s.price);
									content.find(".card-modal__column-1").html(s.img);
								}
							},
							error: function (e) {
								console.log(e);
							}
						});
					});

					current.$content.find(".product__button-item-add").on("click", function () {
						let parent = $(this).closest(".card-modal");
						let size = parent.find(".product-item-offers__size.active");
						let color = parent.find(".product-item-offers__color.active");
						$.ajax({
							url: '/local/templates/HassFashion/ajax/sale/add_to_cart.php',
							type: 'post',
							dataType: 'json',
							data: {
								data: {
									id: size.attr("data-prod-id"),
									size: size.attr("data-offer-size"),
									color: color.attr("data-offer-color"),
									in_basket: true
								}
							},
							success: function (s) {
			
								var price = $(s.html).find('.card-modal__price').text().replace('цена: ', '').replace(' руб.', '');
								var _tmr = _tmr || [];
								_tmr.push({
									list: '2',
									type: 'itemView',
									pagetype: 'cart',
									productid: [id],
									totalvalue: price,
								});

	//							if (typeof VK !== "undefined") {
	//								VK.Retargeting.ProductEvent(221247, 'add_to_cart', {
	//									'products': [{ 'id': id, 'price': price }],
	//									'currency_code': 'RUB',
	//								});
	//								VK.Retargeting.Event('add_to_cart');
	//								VK.Goal('add_to_cart', { value: 8 });
	//							}
								var _tmr = window._tmr || (window._tmr = []);
								_tmr.push({ "type": "reachGoal", "id": 69910297, "goal": "add to cart" });
								$.fancybox.getInstance().current.$content.find(".wrapper").html($(s.html).find(".wrapper").html());
								if (s.basket != undefined) {
									let basket_line = $(".header__cart-wrapper .bx-basket-block_number");
									if (basket_line.length > 0) {
										basket_line.html(s.basket);
									}
								}
							},
							error: function (e) {
								console.log(e);
							}
						});
					});
				}
			}
			);
		},
		error: function (e) {
			console.error(e);
		}
	});

})
.on('click', '#card-modal_close_', function() {
	$.fancybox.close();
})
/*
быстрый просмотр
*/
.on('click', '[data-fast-view]', function(e) {
	e.stopPropagation();
	e.preventDefault();
	let th = $(this),
			url = th.data('fast-view');

	$.fancybox.open({
		src  : url,
		type : 'ajax',
		opts : {
			afterShow : function( instance, current ) {
				$(".link-modal").fancybox();
				$(".product__accordion-header").on('click', function () {
					$(this).siblings(".product__accordion-body").slideToggle();
					$(this).toggleClass("active");
				});
				$('.gallery').each(function (i,e) {
					$(e).magnificPopup({
						type: 'image',
						closeOnContentClick: true,
						delegate: 'a',
						mainClass: 'mfp-no-margins mfp-with-zoom mfp-z-index',
						image: {
							verticalFit: true
						},
						gallery: {
							enabled: true
						}

					});
				});
			}
		}
	});
})
.on('click', '#bx-soa-order .btn-order-save', function(e) {
	var _tmr = window._tmr || (window._tmr = []);
	_tmr.push({"type":"reachGoal","id":3567381,"goal":"purchase"});
});


jQuery(document).ready(function($){
	$('.custom-img-slider.catalog-item-first-pic-pair').each(function() {
		
		if (window.matchMedia('(max-width: 767px)').matches)
			new Swiper($(this), {
				slidesPerView: 1,
				pagination: {
					clickable: true,
					el: '.swiper-pagination',
				},
			});
	});
});
	  
jQuery(document).on('click', '.novelty__card', function(event){
	// return !jQuery(event.target).hasClass('custom-img-slider-dot');
	return !jQuery(event.target).hasClass('swiper-pagination-bullet');
});

address = location.pathname;

// $(function() {
// 	if (address.startsWith("/catalog/")) {
// 		var started,
// 			session = BX.bitrix_sessid();

// 		if (BX.getCookie('subform') != 'y') {
// 			if (!BX.getCookie('started' + session)) {
// 				started = Date.now();
// 				BX.setCookie('started' + session, started, {path: '/'});
// 			} else {
// 				started = BX.getCookie('started' + session);
// 			}

// 			let TimerCBH = setInterval(function () {
// 				console.log('iter 1');
// 				if (Date.now() >= parseInt(started) + 30000) {
// 					var date = new Date();
// 					date.setTime(date.getTime() + (12 * 60 * 60 * 1000));
// 					BX.setCookie('subform', 'y', {
// 						expires: date,
// 						path: '/',
// 						secure: true,
// 						domain: document.location.host
// 					});
				
// 					$.fancybox.open({
// 						baseClass: "card-modal-fancywrapp",
// 						src: '#submodal',
// 						type: 'inline'
// 					});
// 					clearInterval(TimerCBH);
// 				}
// 			}, 10000);
// 		}
// 	}
// });

// Слайдер на главной странице
document.addEventListener("DOMContentLoaded", (event) => {
	new Swiper('.js-init-hero-modal', {
		speed: 400,
		spaceBetween: 0,
		slidesPerView: 1,
		loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: true,
		},
		navigation: {
			nextEl: '.hero__slider-item-navigation .novelty-swiper-button-next',
			prevEl: '.hero__slider-item-navigation .novelty-swiper-button-prev',
		},
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
	});
});