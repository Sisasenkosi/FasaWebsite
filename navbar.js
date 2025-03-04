document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.remove('hidden');
});

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.add('hidden');
});

// Function to hide the mobile menu
function hideMenu() {
  document.getElementById('mobile-menu').classList.add('hidden');
}

function scrollAndHide(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href');
  document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  hideMenu();
}

// Attach event listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('close-menu').addEventListener('click', hideMenu);

  document.querySelectorAll('.scroll a').forEach((link) => {
    link.addEventListener('click', scrollAndHide);
  });
});
