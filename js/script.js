/* Локализация datepicker */
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
	monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
	dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
	dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
	dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

$(function () {
	$("#datepicker").datepicker();
});


$(document).ready(function () {
	formSelect = document.querySelector('.form-select');
	if (formSelect) {
		$('.form-select').select2({
			placeholder: "тема",
		});
	}
});


var element = document.getElementById('header');
window.addEventListener('scroll', function () {
	if (window.scrollY > 1) {
		element.classList.add("scroll");
	} else {
		element.classList.remove("scroll");
	}
});


$('.geography__slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
});

$('.recommendations__slider').slick({
	slidesToShow: 3,
	dots: false,
	arrows: true,
	infinite: true,
	prevArrow: '.recommendations__slider-prev',
	nextArrow: '.recommendations__slider-next',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}
		},
	]
});

$('.useful__slider').slick({
	slidesToShow: 4,
	dots: false,
	arrows: true,
	infinite: true,
	prevArrow: '.useful__slider-prev',
	nextArrow: '.useful__slider-next',
	responsive: [
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
			}
		},
	]
});

$('.useful-products__slider').slick({
	slidesToShow: 4,
	dots: false,
	arrows: true,
	infinite: false,
	prevArrow: '.useful-products__slider-prev',
	nextArrow: '.useful-products__slider-next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
		},
	]
});

$('.shop-useful__slider').slick({
	slidesToShow: 4,
	dots: false,
	arrows: true,
	infinite: false,
	prevArrow: '.shop-useful__slider-prev',
	nextArrow: '.shop-useful__slider-next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: "unslick",
		},
	]
});


$('.expertise__slider').slick({
	slidesToShow: 4,
	dots: false,
	arrows: true,
	infinite: false,
	prevArrow: '.expertise__slider-prev',
	nextArrow: '.expertise__slider-next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
		},
	]
});

$('.speeches__slider').slick({
	slidesToShow: 3,
	dots: false,
	arrows: true,
	infinite: false,
	prevArrow: '.speeches__slider-prev',
	nextArrow: '.speeches__slider-next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
		},
	]
});

$('.articles__slider').slick({
	slidesToShow: 4,
	dots: false,
	arrows: true,
	infinite: false,
	prevArrow: '.articles__slider-prev',
	nextArrow: '.articles__slider-next',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				infinite: true,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				infinite: true,
			}
		},
	]
});

/* видео на стр управление и автоматизация */
$('.btn-play').click(function () {
	$(this).remove()
	$('.control-main__video')[0].play()

	function frame() {
		const events = $('.control-main-timecode__circle').map(function () {
			const timecode = this.dataset.timecode
			const start = $(this).closest('.control-main-timecode__wrapper')[0].getBoundingClientRect().left
			const offset = this.getBoundingClientRect().left - start
			return { timecode, offset }
		})

		const timecode = $('.control-main__video')[0].currentTime
		for (let i = 1; i < events.length; i++) {
			if (events[i].timecode < timecode)
				continue

			const a = events[i - 1]
			const b = events[i]
			// diffPart / diffFull = offsetDiffPart / offsetDiffFull
			const diffFull = b.timecode - a.timecode
			const diffPart = timecode - a.timecode
			const offsetDiffFull = b.offset - a.offset
			const offsetDiffPart = offsetDiffFull * diffPart / diffFull
			// console.log(offsetDiffPart)
			$('.control-main-timecode__circle_active')[0].style.left = `${a.offset + offsetDiffPart}px`
			break
		}

		requestAnimationFrame(frame)
	}

	window.requestAnimationFrame(frame)
})

$('[data-timecode]').click(function () {
	$('.control-main__video')[0].currentTime = this.dataset.timecode
})

$('.control-main__video').click(function () {
	if (this.paused)
		this.play();
	else
		this.pause();
})

const textblock = $('.control-about__text');
const btn = $('.control-about__text--btn');

btn.on('click', function () {
	if (textblock.hasClass('control-about__text--show')) {
		textblock.removeClass('control-about__text--show');
		btn.html('раскрыть');
	} else {
		textblock.addClass('control-about__text--show');
		btn.addClass('hide');
	}
});



$('.control-materials__slider').slick({
	slidesToShow: 1,
	dots: false,
	arrows: true,
	infinite: false,
	prevArrow: '.control-materials__slider-prev',
	nextArrow: '.control-materials__slider-next',
});

$('.shop-catalog__slider').slick({
	slidesToShow: 1,
	dots: true,
	arrows: false,
	infinite: true,
});

$('.shop-item .slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	fade: true,
	asNavFor: '.slider-nav',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true,
			}
		},
	]
});
$('.shop-item .slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: true,
	focusOnSelect: true
});


$('.shop-item-two .slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: false,
	fade: true,
	asNavFor: '.slider-nav',
	responsive: [
		{
			breakpoint: 992,
			settings: {
				dots: true,
			}
		},
		{
			breakpoint: 576,
			settings: "unslick"
		},
	]
});
$('.shop-item-two .slider-nav').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slider-for',
	dots: false,
	centerMode: true,
	focusOnSelect: true
});

/* видео */
const btnOk = document.querySelector('.shop-item__btn-play');
const btnStop = document.querySelector('.shop-item__btn-stop');
const wrapperVideo = document.getElementById('fon');
if (btnOk) {
	btnOk.addEventListener('click', function () {
		wrapperVideo.play();
		btnStop.classList.toggle('active');
		btnOk.classList.toggle('active');
	});
	btnStop.addEventListener('click', function () {
		wrapperVideo.pause();
		btnOk.classList.toggle('active');
		btnStop.classList.toggle('active');
	});
}


