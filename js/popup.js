var popup = document.querySelector('.modal-wrapper');
var popupButton = document.querySelector('.modal-btn-search');
var form = popup.querySelector('form');
var arrive = popup.querySelector('[name=arrive]');
var depart = popup.querySelector('[name=depart]');

popup.classList.add('hidden');

popupButton.addEventListener('click', function(evt) {
	evt.preventDefault();
  	popup.classList.toggle('hidden');
  	arrive.focus();
});

form.addEventListener('submit', function (evt) {
	if (!arrive.value || !depart.value) {
      evt.preventDefault();
      console.log("Нужно ввести дату заезда и выезда");
  }  else {
      localStorage.setItem("arrive", arrive.value);
      localStorage.setItem("depart", depart.value);
  }
  });



