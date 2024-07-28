const menuBtn = document.querySelector('.menu-btn');
const menuPage = document.querySelector('.cont-page');

let menuOpen = false;

if(menuBtn){
  menuBtn.addEventListener('click', () => {
      if(!menuOpen) {
          menuBtn.classList.add('open2');
          menuPage.classList.add('open2');
          menuOpen = true;
      }else{
          menuBtn.classList.remove('open2');
          menuPage.classList.remove('open2');
          menuOpen = false;
      }
  });
}

var prevScrollpos = window.scrollY;

function hidenavbar() {
    var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        }else{
            document.getElementById("navbar").style.top = "-120px";
        }
    prevScrollpos = currentScrollPos;
}

window.onscroll = function() {hidenavbar()};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.js-scroll');
hiddenElements.forEach((el) => observer.observe(el));
