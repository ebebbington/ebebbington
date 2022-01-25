function getAge() {
  const birthYear = 1998;
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

function displayPersonalDescription() {
  const age = getAge();
  const descriptionElem = document.getElementById("personal-description");
  const description = "<strong>Hi! I am Edward Bebbington, aged " + age +
    ", based in the UK, with a wide interest of many technologies and tools.</strong>";
  descriptionElem.innerHTML = description;
}

function displayCopyright() {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = "Copyright © " +
    currentYear + " Edward Bebbington";
}

window.addEventListener("load", function () {
  // Display some required content
  displayPersonalDescription();
  displayCopyright();

  // Listen for events on clicking the project images
  document.getElementById("projects").addEventListener("click", function (e) {
    const url = e.target.dataset.url;
    if (url) {
      window.open(url);
    }
  });

  // On click of the github icon/link
  document.getElementById("github-icon").addEventListener(
    "click",
    function (e) {
      window.open(e.target.dataset.url);
    },
  );

  // On scroll, activate the scrolling bar
  window.onscroll = function () {
    const windowScroll = document.body.scrollTop ||
      document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (windowScroll / height) * 100;
    document.getElementById("scroll-bar").style.width = scrolled + "%";
  };

  // An obvious dirty fix for when clicking a nav bar item, the section displays below the header (as before it was too high up and being obstructed, where padding and marign didnt help)
  window.addEventListener("hashchange", function (e) {
    console.log(e);
    scrollBy(0, -90);
  });

  document.getElementById("mobile-menu-button").addEventListener(
    "click",
    function (e) {
      const $mobileMenu = document.getElementById("mobile-menu");
      const isOpen = $mobileMenu.className.indexOf("open") > -1;
      if (isOpen) {
        $mobileMenu.classList.remove("open");
      } else {
        $mobileMenu.classList.add("open");
      }
    },
  );

  const $mobileNavItems = document.getElementsByClassName("mobile-nav-items");
  for (let i = 0; i < $mobileNavItems.length; i++) {
    $mobileNavItems[i].addEventListener("click", function () {
      document.getElementById("mobile-menu").classList.remove("open");
    });
  }
});
