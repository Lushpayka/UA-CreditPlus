const btn = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = modal.querySelector('.modal-close');
const getMoney = document.querySelector('.getMoney');

btn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.classList.add('hidden');
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('hidden');
});

getMoney.addEventListener('click', () => {
    modal.style.display = 'none';
    alert('Дякуємо за звернення. Найближчим часов Вам позвонить наш менеджер');
    dayBack.textContent = '';
    sumBack.textContent = '';
})