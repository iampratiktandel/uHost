var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan-button');
var noButton = document.querySelector('.modal__action--negative');

selectPlanButton.forEach((el) => {
  el.addEventListener('click', () => {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  })
})

noButton.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
})

backdrop.addEventListener('click', () => {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
})