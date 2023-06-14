const burger = document.getElementById('burger');
const navUl = document.getElementById('navUl');
const navul = document.querySelector('.nav-ul');


burger.addEventListener('click', ()=> {
      burger.classList.toggle('show');
      navUl.classList.toggle('show');
});

navul.addEventListener('click', ()=> {
      navul.classList.remove('show');
      burger.classList.remove('show');
});