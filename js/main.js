$(function(){

	// $('.slider_block_wr').each(function(){
	//     const slider = $(this).find('.swiper');
	//     const sliderId = slider.data('id');
	//     const sliderClass = '.' + sliderId;
	//     const arrow = slider.data('arrow');    

	//     const newProductsSwiper = new Swiper(sliderClass, {
	// 		loop: true,
	// 		slidesPerView: 1,
	// 		loopedSlides: 1,
	// 		navigation: {
	// 		    nextEl: '.swiper-' + arrow + '-next',
	// 		    prevEl: '.swiper-' + arrow + '-prev',
	// 		},
	// 		pagination: {
	// 			el: ".swiper-pagination",
	// 		},
	// 		effect: "fade",
	// 		lazy: true
	//     });
	// })


    const newProductsSwiper = new Swiper('.slider-wrap_material', {
        loop: false,
        slidesPerView: 5,
        spaceBetween: 0,
        lazy: true,
        breakpoints: {
            0: {
              slidesPerView: 'auto',
              spaceBetween: 12,
              centeredSlides: true,
              loop: true,
            },
            768: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
        },
    });

    const swiperM = newProductsSwiper; 

    $(".materials_block_wr .swiper-slide").on("click", function () {
        let index = $(this).data("slid-index");

        swiperM.slideTo(index);
    });

    swiperM.on("slideChange", function () {
        let activeIndex = swiperM.realIndex; 

        $(".materials_block_wr .swiper-slide, .materials_block_wr .slider_text").removeClass("active");

        $(`.materials_block_wr .swiper-slide[data-slid-index="${activeIndex}"]`).addClass("active");
        $(`.materials_block_wr .slider_text[data-slid-index="${activeIndex}"]`).addClass("active");
    });

    $(".materials_block_wr .swiper-slide").on("click", function () {
        let index = $(this).data("slid-index");

        swiperM.slideTo(index);

        $(".materials_block_wr .swiper-slide").removeClass("active");
        $(".materials_block_wr .slider_text").removeClass("active");

        $(this).addClass("active");
        $(`.materials_block_wr .slider_text[data-slid-index="${index}"]`).addClass("active");
    });


    const menu = ['2001', '2005', '2009', '2013', '2020',  '2021']

    const historySwiper = new Swiper('.slider-wrap_history', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 0,
        lazy: true,
        effect: "fade",
        navigation: {
            nextEl: ".arrow_history.next",
            prevEl: ".arrow_history.prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
    });

    const teamImgSwiper = new Swiper('.slider-team_img', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        lazy: true,
        navigation: {
            nextEl: ".arrow_team.next",
            prevEl: ".arrow_team.prev",
        },
        on: {
            slideChange: function () {
                const activeIndex = this.realIndex; // Получаем текущий индекс слайда

                // Удаляем класс active у всех .team_text .item
                document.querySelectorAll('.team_text .item').forEach(item => {
                    item.classList.remove('active');
                });

                // Добавляем класс active элементу с соответствующим data-slid-index
                const activeTextItem = document.querySelector(`.team_text .item[data-slid-index="${activeIndex}"]`);
                if (activeTextItem) {
                    activeTextItem.classList.add('active');
                }
            }
        },
        breakpoints: {
            0: {
                spaceBetween: 0,
            },
            768: {
                spaceBetween: 15,
            }
        },
    });


	
	var $body = $(document.body),
      	$html = $(document.documentElement);

    function formPopup($btn,$wrap){

    var closeForm = $('.formExtraWrapper .close-form'),
            formWrap = $($wrap),
            formBtn = $($btn),
            formOpened = 'opened',
            overflowHidden = 'oveflowHidden';

        closeForm.on('click', function() {
            formWrap.removeClass(formOpened);
            $html.removeClass(overflowHidden);
        });
        formBtn.on('click', function(event) {
            formWrap.addClass(formOpened);
            $html.toggleClass(overflowHidden);
            event.preventDefault();
        });

        $html.on('keyup', function(event) {
            if (formWrap.hasClass(formOpened) && event.keyCode == 27) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
        $body.on('click touchstart', function(a) {
            if ($(a.target).closest('.formExtraWrapper').length || $(a.target).closest(formBtn).length) return;
            if (formWrap.hasClass(formOpened)) {
                formWrap.removeClass(formOpened);
                $html.removeClass(overflowHidden);
            }
        });
    }

	formPopup('.form_btn','.form_popup');

    function thpopup() {
        const wrap = $('.form-popup-wrapper.th_block');

        $('.form-popup-wrapper.opened').removeClass('opened');
        wrap.addClass('opened');
        $html.removeClass('oveflowHidden');

        $('.form-popup-wrapper.th_block').find('.close-form').on('click', function() {
            wrap.removeClass('opened');
        });

        $html.on('keyup', function(event) {
            if (wrap.hasClass('opened') && event.keyCode == 27) {
                wrap.removeClass('opened');
            }
        });
    }

    var menuBtn = $('.burger'),
        menuWrapper = $('.menu_burger'),
        menuClose = $('.menuClose'),        
        openedMenu = 'opened',
        overflowHidden = 'oveflowHidden';

    menuBtn.on("click", function(event) {
        menuWrapper.toggleClass(openedMenu);
        menuBtn.toggleClass(openedMenu);
        $html.toggleClass(overflowHidden);
        $html.toggleClass('open_menu');
    });
    menuClose.on("click", function(event) {
        menuWrapper.removeClass(openedMenu);
        menuBtn.removeClass(openedMenu);
        $html.removeClass(overflowHidden);
        $html.removeClass('open_menu');
    });

    $(document).on('click touchstart', function(e){
        if( $(e.target).closest(menuBtn).length || $(e.target).closest(menuWrapper).length) 
          return;
        if (menuBtn.hasClass(openedMenu)){
            menuWrapper.removeClass(openedMenu);
            menuBtn.removeClass(openedMenu);
            $html.removeClass(overflowHidden);
            $html.removeClass('open_menu');
        }
    });

    $(".accor_block .accor_name").on("click", function () {
        $(this).parent().toggleClass('opened');
    });
    
});
