const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const currentYear = document.querySelector('.current-year');

const newsArticles = [
  {
    date: '2026.04.13',
    text: 'SAILab launches a refreshed website that presents research, publications, and contact information clearly.',
  },
  {
    date: '2026.04.10',
    text: 'Publication and member pages updated with the latest lab information and team overview.',
  },
];

function renderNews() {
  const newsList = document.getElementById('news-list');
  if (!newsList) return;

  newsList.innerHTML = newsArticles
    .map(
      ({ date, text }) =>
        `<div class="news-item"><p class="news-date">${date}</p><p>${text}</p></div>`
    )
    .join('');
}

function updateYear() {
  if (!currentYear) return;
  currentYear.textContent = new Date().getFullYear();
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 720 && nav?.classList.contains('open')) {
    nav.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  renderNews();
  updateYear();
});
