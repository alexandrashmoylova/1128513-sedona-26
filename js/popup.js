var popup = document.querySelector('.modal-wrapper');
var popupButton = document.querySelector('.modal-btn-search');

popup.classList.add('hidden');

popupButton.addEventListener('click', function() {
	popup.classList.toggle('hidden');
});



