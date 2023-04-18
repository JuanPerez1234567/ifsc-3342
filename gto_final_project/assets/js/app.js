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



  function openService(evt, serviceName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(serviceName).style.display = "block";
    evt.currentTarget.className += " active";
  }




  let slideIndex = [1,1,1];
  let slideId = ["mySlides1","mySlides2", "mySlides3"]
  showSlides(1, 0);
  showSlides(1, 1);
  showSlides(1, 2);

  function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
  }
  
  function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);

    if (n > x.length) {
      slideIndex[no] = 1
    }    
    if (n < 1) {
      slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }

  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();