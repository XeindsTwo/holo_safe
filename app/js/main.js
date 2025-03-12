import {setupMobileMenu} from "./mobileMenu.js";

setupMobileMenu();

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute('href').slice(1);
  const targetElement = document.getElementById(targetId);

  let targetOffset;

  targetOffset = targetElement.offsetTop - 30;
  window.scrollTo({top: targetOffset, behavior: 'smooth'});
}

const menuLinks = document.querySelectorAll('.desktop');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', scrollToSection);
});

new Swiper('.reviews__swiper', {
  speed: 800,
  spaceBetween: 14,
  slidesPerView: 'auto',
  scrollbar: {
    el: '.reviews__swiper-scrollbar',
    draggable: true
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.filling__form');
  let selectedPlatform = '';

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    document.querySelectorAll('.label.error').forEach(function(label) {
      label.classList.remove('error');
    });

    let isValid = true;
    const formData = new FormData(form);
    document.querySelectorAll('[data-required-input]').forEach(function(input) {
      if (!input.value.trim()) {
        isValid = false;
        document.querySelector('label[for="' + input.id + '"]').classList.add('error');
      }
    });

    if (!selectedPlatform) {
      isValid = false;
      document.querySelector('label[for="contactPlatform"]').classList.add('error');
    } else {
      formData.append('contactPlatform', selectedPlatform);
    }

    if (isValid) {
      for (let [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
      }
      alert('Form submitted successfully!');
    }
  });

  document.querySelectorAll('[data-required-input]').forEach(function(input) {
    input.addEventListener('input', function() {
      if (input.value.trim()) {
        document.querySelector('label[for="' + input.id + '"]').classList.remove('error');
      }
    });
  });

  const twitterButton = document.querySelector('[data-required-twitter]');
  const telegramButton = document.querySelector('[data-required-telegram]');

  twitterButton.addEventListener('click', function() {
    selectedPlatform = 'Twitter';
    document.querySelector('label[for="contactPlatform"]').classList.remove('error');
    twitterButton.classList.add('active');
    telegramButton.classList.remove('active');
  });

  telegramButton.addEventListener('click', function() {
    selectedPlatform = 'Telegram';
    document.querySelector('label[for="contactPlatform"]').classList.remove('error');
    telegramButton.classList.add('active');
    twitterButton.classList.remove('active');
  });
});