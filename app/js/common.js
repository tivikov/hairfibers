$(function() {

	$('.mobile-menu-list li >a').each(function(){
		if(!$(this).parent().children('.submenu').length == 0) {
			$(this).parent().append('<i class="fas fa-caret-down"></i>');
		}
	})
	$('.mobile-menu .fas').click(function(){
		$(this).parent().children('.submenu').toggle();
	})

	$('.humb').click(function(){
		$('.moblile-menu-wrap').show();
	})

	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".moblile-menu-wrap"); // тут указываем ID элемента
		if (div.is(e.target)) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});
	$('.reviews-state-loop').hide();
	$('.product-filter-block li').click(function(){
		$('.product-filter-block li').not(this).removeClass('selected');
		if($(this).parent().hasClass('reviews-filter')) {
			$('.archive-product-loop').hide();
			$('.reviews-state-loop').show();
		}
		else {
			$('.reviews-state-loop').hide();
			$('.archive-product-loop').show();
		}
		$(this).toggleClass('selected');
	})
	function changePreview() {
		if($(window).width() < 576) {
			return;
		}
		var previewHeight = $('.preview-text').outerHeight();
		$('.preview-text').css('margin-top', '-' + previewHeight + 'px');
	}
	changePreview();
	$(window).resize(changePreview)

	// $('.thumbnail-wrap').click(function(){
	// 	var ImageGal = $(this).find('img').attr('src');
	// 	$('.product-review-main-image').find('img').attr('src', ImageGal);
	// })

	
});

$(document).ready(function() {
	$('.product-review-thumbnails').slick({
		vertical: true,
		asNavFor: '.product-review-main-image',
		slidesToShow: 4,
		focusOnSelect: true,
		infinite: false,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					vertical: false
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					vertical: false
				}
			}
		]
	})
	$('.product-review-main-image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		arrows: false,
		dots: false,
		asNavFor: '.product-review-thumbnails',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					draggable: true
				}
			}
		]
	});
	
})
