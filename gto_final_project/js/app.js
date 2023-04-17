//Toggle mobile menu
const toggle  = document.querySelector(".toggle");
const menu = document.querySelector(".primary-nav");

function toggleMenu() {
    
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      toggle.querySelector(".material-symbols-outlined").innerHTML = "menu";
    } else {
      menu.classList.add("active");
      toggle.querySelector(".material-symbols-outlined").innerHTML = "close";
    }
  }


toggle.addEventListener('click', toggleMenu, false)

//dropdown
const items = document.querySelectorAll('.nav-item')

function toggleItem(){
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
      } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
      } else {
        this.classList.add("submenu-active");
      }

}

for (let item of items) {
    if (item.querySelector(".submenu")) {
      item.addEventListener("click", toggleItem, false);
    }
  }