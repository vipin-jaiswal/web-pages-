const config = require('../tailwind.config.js');
function handleMenu() {
      const nav = document.getElementById("navbar");
      const menu = document.getElementById("mobile-menu");
      const main = document.getElementById("main")

      nav.classList.toggle("hidden");
      menu.classList.toggle("hidden");
      main.classList.toggle("hidden");
    }

    