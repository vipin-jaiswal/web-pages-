console.log('script.js codes');


function handleMenu() {
  const nav = document.getElementById("navbar");
  const menu = document.getElementById("mobile-menu");
  const main = document.getElementById("main");

  if (nav && menu && main) {
    nav.classList.toggle("hidden");
    menu.classList.toggle("hidden");
    main.classList.toggle("hidden");
  } else {
    console.warn("One or more elements not found for menu toggle.");
  }
}


function setIntersectionObserver(element, isLTR, speed) {
  if (!element) {
    console.warn("Element not found for IntersectionObserver");
    return;
  }

  const observerOptions = {
    threshold: speed || 0.1,
  };

  const intersectionCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Visible:", element.id);
        // You could animate based on isLTR or other props here
      }
    });
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback, observerOptions);
  intersectionObserver.observe(element);
}

document.addEventListener("DOMContentLoaded", () => {
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");

  setIntersectionObserver(line1, true, 0.15);
  setIntersectionObserver(line2, false, 0.15);
  setIntersectionObserver(line3, true, 0.15);

  // Only call handleMenu if intended on load
  // handleMenu();
});
