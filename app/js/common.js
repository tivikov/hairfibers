$(function() {

	$('.header-category').click(function(){
		$(this).find('.submenu').toggleClass('active');
	})
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

	$('.product-filter-block li').click(function(){
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
});
