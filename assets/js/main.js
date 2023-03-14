/**
* Template Name: Medilab - v4.10.0
* Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
let print_r = (data) => {
  console.log(JSON.stringify(data));
}
(function() {
  "use strict";
  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  let selectTopbar = select('#topbar')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.add('topbar-scrolled')
        }
      } else {
        selectHeader.classList.remove('header-scrolled')
        if (selectTopbar) {
          selectTopbar.classList.remove('topbar-scrolled')
        }
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox 
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate Gallery Lightbox 
   */
  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();
  //submit submit-contact-us
  document.addEventListener('click', function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.click-me')) return;
    // Don't follow the link
    event.preventDefault();
    switch(event.target.id) {
      case "submit-contact-us":
        submitContactUsForm();
        break;
    }
  }, false);
  document.addEventListener('input', function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.form-check')) return;
    // Don't follow the link
    event.preventDefault();
    document.getElementById("email-result").innerHTML = "&nbsp;";
  }, false);
  function setTooltips() {
    let tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
    for(let i = 0; i < tooltips.length; i++) {
      let tooltip = new bootstrap.Tooltip(tooltips[i]);
    }
  }
  window.addEventListener('DOMContentLoaded', function() {
    setTooltips();
  }, false);
  /*
  setTimeout(() => {
    document.getElementById("google-maps-iframe").innerHTML = '<iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2698.529377523902!2d-122.21455998424871!3d47.44061940742204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905d045a681911%3A0x768c7ef2309d86a6!2s4300%20Talbot%20Rd%20S%20Suite%23%20314%2C%20Renton%2C%20WA%2098055!5e0!3m2!1sen!2sus!4v1678775958300!5m2!1sen!2sus" allowfullscreen></iframe>';
  }, 350);
  */
})();
let isValidEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  } else {
    return false;
  }
}
let submitContactUsForm = () => {
  let params = {
    endpointAction: "/website-email-sender-form",
    name: document.getElementById("contact-us-name").value,
    subject: document.getElementById("contact-us-subject").value,
    email: document.getElementById("contact-us-email").value,
    message: document.getElementById("contact-us-message").value
  }
  if(params.name == "" || params.subject == "" || params.message == "" ||  !isValidEmail(params.email)) {
    document.getElementById("email-result").innerHTML = "<span style='color:red'>all fields are required</span>";
    if(params.email != "" && !isValidEmail(params.email)) {
      document.getElementById("email-result").innerHTML = "<span style='color:red'>email address is invalid</span>";
    }
  } else {
    api.call(params)
        .then((res) => {
          if (res.email == document.getElementById("contact-us-email").value && res.success == true) {
            document.getElementById("contact-us-name").value = "";
            document.getElementById("contact-us-email").value = "";
            document.getElementById("contact-us-subject").value = "";
            document.getElementById("contact-us-message").value = "";
            document.getElementById("email-result").innerHTML = "<span style='color:green'>Message Sent! Thank You. We will get back to you ASAP</span>";
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }
}