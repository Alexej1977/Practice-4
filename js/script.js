$(document).ready(function () {
	$('.quote-list').slick();
	$('.testomonial-list').slick()
});

document.querySelector('.burger').addEventListener('click', () => {
	document.querySelector('.burger').classList.toggle('open');
	document.querySelector('.mobil-nav').classList.toggle('open');
	document.querySelector('body').classList.toggle('open');
});


document.querySelector('.mobil-nav-list').addEventListener('click', () => {
	document.querySelector('.burger').classList.toggle('open');
	document.querySelector('.mobil-nav').classList.toggle('open');
	document.querySelector('body').classList.toggle('open');
});