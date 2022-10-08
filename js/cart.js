function hideSearch() {
    const searchBtn = document.querySelector('.header__main-searchbtn');
    const logo = searchBtn.parentElement.previousElementSibling;
    const search = searchBtn.parentElement;
    searchBtn.addEventListener('click', () => {
      logo.classList.toggle('hidden');
      search.classList.toggle('active');
    })
  }
  hideSearch()
  
  
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };
  
  if (isMobile.any()) {
    document.body.classList.add('touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
        const menuArrow = menuArrows[index];
        menuArrow.addEventListener('click', function (e) {
          menuArrow.parentElement.classList.toggle('active');
        })
      }
    }
  } else {
    document.body.classList.add('pc');
  }
  
  
  
  // Мобильное меню бургер
  function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const headerLinks = document.querySelector('.header__main-links')
    const genderLinks = document.querySelector('.gender')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        headerLinks.classList.add('active')
        genderLinks.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        headerLinks.classList.remove('active')
        genderLinks.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        headerLinks.classList.remove('active')
        genderLinks.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  
  
  
  const menuItemLinks = document.querySelectorAll('.menu__item-link');
  function deleteClasses() {
    menuItemLinks.forEach(menuItemLink => {
      if (menuItemLink.parentElement.classList.contains('open')) {
        menuItemLink.parentElement.classList.remove('open');
      }
    })
  }
  
  
  function navbarMenu2() {
    menuItemLinks.forEach(menuItemLink => {
      menuItemLink.addEventListener('click', () => {
        deleteClasses();
        menuItemLink.parentElement.classList.toggle('open');
      })
    })
  }
  navbarMenu2()
  
  
  function closeBtnSubmenu() {
    const submenuCloseBtns = document.querySelectorAll('.submenu__item-close');
    const submenus = document.querySelectorAll('.submenu');
    submenuCloseBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        submenus.forEach(submenu => {
          submenu.parentElement.classList.remove('open');
        })
      })
    })
    // submenuCloseBtn.addEventListener('click', () => {
    //   submenu.parentElement.classList.remove('open');
    // })
  }
  closeBtnSubmenu()
  
  function footerAccordion() {
    const items2 = document.querySelectorAll('.accordion__item-trigger')
    items2.forEach(item2 => {
      item2.addEventListener('click', () => {
        const parent2 = item2.parentNode
        if (parent2.classList.contains('accordion__item-active')) {
          parent2.classList.remove('accordion__item-active')
        } else {
          document
            .querySelectorAll('.accordion__item')
            .forEach(child2 => child2.classList.remove('accordion__item-active'))
          parent2.classList.add('accordion__item-active')
        }
      })
    })
  }
  // footerAccordion()
  window.addEventListener('resize', () => {
    if (window.innerWidth < 991.98) {
      footerAccordion()
    }
  })
  
  function cart() {
    const cartLink = document.querySelector('.header__main-link--cart');
    const cartWindow = document.querySelector('.cart-window');
    cartLink.addEventListener('click', () => {
      cartWindow.classList.toggle('visible');
    })
  }
  cart()
  
  
  
  const cartSwiper1 = new Swiper('.cart-item__imgslider--1', {
    slidesPerView: 1,
    spaceBetween: 100,
    // If we need pagination
    pagination: {
      el: '.cart-item__pagination',
      clickable: true,
    }
  
    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
  });
  const cartSwiper2 = new Swiper('.cart-item__imgslider--2', {
    slidesPerView: 1,
    spaceBetween: 100,
    // If we need pagination
    pagination: {
      el: '.cart-item__pagination',
      clickable: true,
    }
  
    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
  });
  const cartSwiper3 = new Swiper('.cart-item__imgslider--3', {
    slidesPerView: 1,
    spaceBetween: 100,
    // If we need pagination
    pagination: {
      el: '.cart-item__pagination',
      clickable: true,
    }
  
    //   // Responsive breakpoints
    //   breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 3,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30
    //   },
    // }
  });
  
  
  
  function cartCount() {
    const cartCounts = document.querySelectorAll('.item-left__count');
    // const countMinus = document.querySelectorAll('.minus');
    // const countPlus = document.querySelectorAll('.plus');
    // const countInput = document.querySelectorAll('.item-left__count-input');
    cartCounts.forEach(count => {
      count.querySelector('.item-left__count-input').value = 1;
      count.addEventListener('click', (event) => {
        if (event.target.classList.contains('minus')) {
          count.querySelector('.item-left__count-input').value--;
        }
        if (event.target.classList.contains('plus')) {
          count.querySelector('.item-left__count-input').value++;
        }
      })
    })
  }
  cartCount()
  
  function promo() {
    const promoBtn = document.querySelector('.cart-review__promo-b');
    const promoClick = document.querySelector('.cart-review__promo-click');
    promoBtn.addEventListener('click', () => {
      promoClick.classList.toggle('visible');
    })
  }
  promo()
  
  function cartItemClose() {
    const closeBtns = document.querySelectorAll('.cart-item__close-btn');
    closeBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.classList.toggle('deleted');
      })
    })
  }
  cartItemClose()
  
  // cart-modal
  // Модальное окно
  if (document.querySelector('.cart-review')) {
    function bindModal(trigger, modal, close) {
      trigger = document.querySelector(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)
  
      const body = document.body
  
      trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
      });
      close.addEventListener('click', () => {
        modal.style.display = 'none'
        body.classList.remove('locked')
      });
      modal.addEventListener('click', e => {
        if (e.target === modal) {
          modal.style.display = 'none'
          body.classList.remove('locked')
        }
      })
    }
  
    // ПЕРВЫЙ аргумент - класс кнопки, при клике на которую будет открываться модальное окно.
    // ВТОРОЙ аргумент - класс самого модального окна.
    // ТРЕТИЙ аргумент - класс кнопки, при клике на которую будет закрываться модальное окно.
    bindModal('.cart-modal__btn', '.cart-modal__wrapper', '.cart-modal__close')
  }