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

new Swiper('.services__swiper', {
  navigation: {
    nextEl: '.services__btn--next',
    prevEl: '.services__btn--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false
  },
  breakpoints: {
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

new Swiper('.reviews__swiper', {
  navigation: {
    nextEl: '.reviews__btn--next',
    prevEl: '.reviews__btn--prev',
  },
  breakpoints: {
    700: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});