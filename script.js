const menuToggle =
  document.getElementById('menu-toggle');

const navMenu =
  document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {

  navMenu.classList.toggle('active');

});

const themeButton =
  document.getElementById('theme-button');

themeButton.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

});

const hiddenElements =
  document.querySelectorAll('.hidden');

const observer =
  new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add('show');

      }

    });

  });

hiddenElements.forEach((el) => observer.observe(el));

const topButton =
  document.getElementById('top-button');

topButton.addEventListener('click', () => {

  window.scrollTo({

    top: 0,

    behavior: 'smooth'

    });

  });