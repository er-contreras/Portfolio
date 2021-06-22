const menu = document.querySelector('.menu-dropdown');

function openMenu() {
  menu.style.visibility = 'visible';
}

function closeMenu() {
  menu.style.visibility = 'hidden';
}

openMenu();
closeMenu();

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    // going to acces the parent modal of this button
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

function openModal(modal) {
  if(modal === null) return
  modal.classList.add('active');
  overlay.classList.add('active');
};

function closeModal(modal) {
  if(modal === null) return
  modal.classList.remove('active');
  overlay.classList.remove('active');
};

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  })
})


