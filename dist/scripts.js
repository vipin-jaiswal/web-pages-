const config = require('../tailwind.config.js');
function handleMenu() {
      const nav = document.getElementById("navbar");
      const menu = document.getElementById("mobile-menu");
      const main = document.getElementById("main")

      nav.classList.toggle("hidden");
      menu.classList.toggle("hidden");
      main.classList.toggle("hidden");
    }
    function setIntersectionObserver(element, isLTR, speed){
      const intersetioncallback=(entris)=>{
        const isIntersecting=Entries[0].isIntersecting;
        console.log(element,isIntersecting)
      }
      const intersectionObserver= new IntersectionObserver(intersetioncallback)
      intersectionObserver.unobserve(element);
    }

    const line1=document.getElementById('line1');
    const line2=document.getElementById('line2');
    const line3=document.getElementById('line3');
    setIntersectionObserver(line1,true,0.15);
    setIntersectionObserver(line2,false,0.15);
    setIntersectionObserver(line3,true,0.15);

    