const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 30,
    effect: "fade",
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  
    },
    autoplay: {
      enabled: true,
      delay:2000, // to control the speed of auto scroll
    },
  });
  
  
  let menu_state = false; // for small screen menu icon 
  let active_state = "home"; // for active state i.e. home, achievements, etc.
  document.getElementById("home_").classList.add('active');
  let states_ = ["home", "research", "publications", "skills",
    "achievements", "contactme", "experience", "key-courses", "certificates",
    "resposibilities", "extra-curriculars", "course-project"];
  states_.forEach(display_content);
  var menu = document.getElementById('menu-icon');
  var small_screen_nav_list = document.getElementById('nav-items-list');
  var navbar = document.querySelector('.navbar');
  var navbarHeight = navbar.offsetHeight;





  window.addEventListener("hashchange", function () {
    // Scroll to the top of the page with smooth animation
    window.scrollTo({
        top: 0,
    });
});
  //adding onclick event to menu icon
  menu.addEventListener('click', menu_onclick);


  //function for menu onclick
  function menu_onclick() {
    menu_state = !menu_state;
    if (menu_state === true) {
      small_screen_nav_list.style.display = "flex";
    }
    else {
      small_screen_nav_list.style.display = "none";
    }
  }
  
  function set_active_state(st) {
    active_state = st;
    if (screen.width < 900) {
      menu_state = false;
      small_screen_nav_list.style.display = "none";
    }
    states_.forEach(disp);
    display_active_state_content();
  }
  
  //for highlighting and diplaying the content based on the item choosen in the navigation menu
  function disp(item) {
    if (item === active_state) {
      if (!document.getElementById(item + "_").classList.contains('active')) {
        document.getElementById(item + "_").classList.add('active');
      }
    }
    else {
      console.log(document.getElementById(item + "_").classList);
      if (document.getElementById(item + "_").classList.contains('active')) {
        document.getElementById(item + "_").classList.remove('active');
      }
    }
  }
  
  //function to display active state content on the screen 
  function display_active_state_content() {
    states_.forEach(display_content);
  }
  

  function display_content(item) {
    if (item === active_state) {
      document.getElementById(item).style.display = "flex";
      console.log("Class for " + item + " : " + document.getElementById(item).style.display)
      
    }
    else {
      document.getElementById(item).style.display = "none";
    }
  }




