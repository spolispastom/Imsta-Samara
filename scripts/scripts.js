$(function(){
	
	$.fn.countMe = function(year, mounth, day, id){

	var note = $('#counter'),
		ts = new Date(year, mounth, day),
		newYear = true;
	
	if((new Date()) > ts){
		// Задаем точку отсчета для примера. Пусть будет очередной Новый год или дата через 10 дней.
		// Обратите внимание на *1000 в конце - время должно задаваться в миллисекундах
		ts = (new Date()).getTime() + ts*60*60*1000;
		newYear = false;
	}
		
	$(id).countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += "Дней: " + days +", ";
			message += "часов: " + hours + ", ";
			message += "минут: " + minutes + " и ";
			message += "секунд: " + seconds + " <br />";
			
			if(newYear){
				message += "осталось до Нового года!";
			}
			else {
				message += "осталось до момента через 10 дней!";
			}
			
			note.html(message);
		}
	});

	};

	$('.popup_t').click(function(){
		$(this).next('.popup_bg').addClass('active');
		$(this).next('.popup_bg').next('.popup').addClass('active');
	})

	$('.popup_bg').click(function(){
		$(this).removeClass('active');
		$(this).next('.popup.active').removeClass('active');
	})
	



	jQuery('.button').click(function() {
		jQuery.scrollTo('#'+$(this).attr('data-rel'), 500);
	});



	 $('.top_slider').mobilyslider({
	 	transition: 'fade',
	 	animationSpeed: 800,
	 	bullets: false,
	 	arrowsHide: false
	 });
	 $('.slider_2').mobilyslider({
	 	transition: 'fade',
	 	animationSpeed: 800,
	 	bullets: false,
	 	arrowsHide: false
	 });
});
