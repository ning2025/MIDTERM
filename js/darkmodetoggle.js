document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    const darkBtn = document.querySelector('[data-bs-theme-value="dark"]');
    const lightBtn = document.querySelector('[data-bs-theme-value="light"]');

    darkBtn.addEventListener('click', () => {
      body.classList.remove('light-mode');
      body.classList.add('dark-mode');
    });
  
    lightBtn.addEventListener('click', () => {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
    });
  });