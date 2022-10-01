const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')
import anime from 'animejs/lib/anime.es.js';  


openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


function disappear(element) {
    element.remove()
    document.getElementById('menu-active').style.display = 'none';
    const menu = document.getElementById('menu-container');
    menu.innerHTML += "<ion-icon  size='large' name='menu-outline' onclick='dropdown(this);'></ion-icon>"
    const main = document.getElementById('main');
    main.classList.remove("overlay");
}

function layer_remove(element){
    element.classList.remove("overlay");
   const main = document.getElementById('main');
    main.classList.remove('overlay')
    const menuActive = document.getElementById('menu-active');
    menuActive.style.display = 'none';
    const close = document.getElementById('close-outline');
    close.remove();
    const menu = document.getElementById('menu-container');
    menu.innerHTML += "<ion-icon  size='large' name='menu-outline' onclick='dropdown(this);'></ion-icon>"

   
}


function dropdown(element) {
    element.remove();
    const menuActive = document.getElementById('menu-active');
  
    const main = document.getElementById('main');
    main.classList.add("overlay");
    menuActive.style.display = 'flex';
    menuActive.focus();
    console.log(menuActive);
    menuActive.classList.add("menu-transition");
    const menu = document.getElementById('menu-container');
    menu.innerHTML += "<ion-icon size='large' id='close-outline' name='close-outline' onclick='disappear(this);'></ion-icon>"
}


