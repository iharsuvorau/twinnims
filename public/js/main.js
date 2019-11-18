// R U N

window.addEventListener('load', function() {
    initMobileMenu();
})

// L I B R A R Y

// Mobile Menu Mechanism

// initialization function of the mobile menu
function initMobileMenu () {
  // hide on clicking outside the menu element
  document.getElementsByTagName('body')[0].addEventListener('click', () => {
    hideMobileMenu();
  })

  // toggle the menu visibility while clicking on the menu button
  document.getElementById('mobile-menu-btn-wrapper').addEventListener('click', (event) => {
    event.stopPropagation();  // to not trigger the body click listener
    event.preventDefault();   // to not change the URI of the page
    toggleMobileMenu();
  })

  // stop propagation while just clicking on the mobile menu itself
  document.getElementById('mobile-menu').addEventListener('click', (event) => {
    event.stopPropagation();  // to not trigger the body click listener
  })

  // hide on device rotation in case the width is bigger than the first breaking point
  document.defaultView.addEventListener('resize', () => {
    if (document.defaultView.innerWidth >= 1000) {  // consult the variables for the value of the breaking point for mobile navigation
      hideMobileMenu();
    }
  })
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('active');

  // fix all the other content
  for (var el of document.getElementsByClassName('wrapper')) {
    el.classList.toggle('fixed');
  }
}

function hideMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('active');

  // undix all the other content
  for (var el of document.getElementsByClassName('main-wrapper')) {
    el.classList.remove('fixed');
  }
}


