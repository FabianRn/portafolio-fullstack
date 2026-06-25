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

  fetch('https://api.github.com/users/octocat')

  .then(response => response.json())

  .then(data => {

    const apiContainer =
      document.getElementById('api-container');

    apiContainer.innerHTML = `

      <h3>${data.name}</h3>

      <p>Repositorios: ${data.public_repos}</p>

      <img
        src="${data.avatar_url}"
        width="120"
      />

    `;

  });

  fetch('http://localhost:3000/api/profile')

  .then(response => response.json())

  .then(data => {

    const profileContainer =
  document.getElementById('profile-container');

profileContainer.innerHTML = `

  <h3>${data.name}</h3>

  <p>
    <strong>Cargo:</strong>
    ${data.role}
  </p>

  <p>
    <strong>Experiencia:</strong>
    ${data.experience}
  </p>

`;

  })

  .catch(() => {

    // Static content in HTML already serves as fallback

  });