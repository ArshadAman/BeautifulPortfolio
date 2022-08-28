// window.onload = function () {
//   document.getElementById("1st").focus();
//   scrollTo(0, 0);
// };

function showOrganisation(id) {
  let org = document.getElementById(id);
  let allJob = document.getElementsByClassName("job-desc");
  let arr = Array.from(allJob);
  for (let index = 0; index < arr.length; index++) {
    let element = arr[index];
    if (index == id - 1) {
      if (element.classList.contains("hidden")) {
        element.classList.remove("hidden");
      }
    } else {
      if (element.classList.contains("hidden")) {
      } else {
        element.classList.add("hidden");
      }
    }
  }
}

function andarJao() {
  //All the variables
  let menuBtn = document.getElementById("cross");
  let sixty = document.getElementById("sixty");
  let one20 = document.getElementById("one-20");
  let mmi = document.getElementById("mmi");
  let main = document.getElementById("content");

  sixty.classList.remove("rotation60");
  one20.classList.remove("rotation120");
  sixty.classList.add("rotation60to0");
  one20.classList.add("rotation120to0");
  //Andar aao
  if (mmi.classList.contains("baharAao")) {
    mmi.classList.remove("baharAao");
  }
  mmi.classList.add("andarJao");
  main.style.filter = "blur(0px)";
  mmi.style.display = "none";
}

function baharAao() {
  //All the variables
  let menuBtn = document.getElementById("cross");
  let sixty = document.getElementById("sixty");
  let one20 = document.getElementById("one-20");
  let mmi = document.getElementById("mmi");
  let main = document.getElementById("content");

  mmi.style.display = "block";
  sixty.classList.remove("rotation60to0");
  one20.classList.remove("rotation120to0");
  sixty.classList.add("rotation60");
  one20.classList.add("rotation120");
  // Bahar jao
  if (mmi.classList.contains("andarJao")) {
    mmi.classList.remove("andarJao");
  }
  mmi.classList.add("baharAao");
  main.style.filter = "blur(6px)";
}

async function menu() {
  let menuBtn = document.getElementById("cross");
  let sixty = document.getElementById("sixty");
  let one20 = document.getElementById("one-20");
  let mmi = document.getElementById("mmi");
  let main = document.getElementById("content");
  menuBtn.addEventListener("click", (e) => {
    if (sixty.classList.contains("rotation60")) {
      andarJao();
    } else if (sixty.classList.contains("rotation60to0")) {
      baharAao();
    }
  });
}

async function up() {
  let items = document.getElementsByClassName("intros");
  let arr = Array.from(items);
  arr[0].classList.add("up");
  arr[0].style.opacity = "1";
  for (let i = 1; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 90));
    arr[i].classList.add("up");
    arr[i].style.opacity = "1";
  }
}

function scrollTrigger(selector) {
  let elements = document.querySelectorAll(selector);
  elements = Array.from(elements);
  elements.forEach((element) => {
    addObserver(element);
  });
}

async function rain() {
  let items = document.getElementsByClassName("nav-items");
  let arr = Array.from(items);
  arr[0].classList.add("falling");

  for (let i = 1; i < arr.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, 50));
    arr[i].classList.add("falling");
  }
  await new Promise((resolve) => setTimeout(resolve, 500));
  up();
}

function addObserver(element) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("up");
        observer.unobserve(entry.target);
      }
    });
  });
  observer.observe(element);
}

// async function showLoadingScreen(){
//   let screen = document.getElementById('loadingScreen');
//   let leftline = document.getElementById('leftline');
//   let rightline = document.getElementById('rightline');
//   document.onload = screen.style.display = 'flex';
//   document.onload = leftline.style.display = 'none';
//   document.onload = rightline.style.display = 'none';
//   let body = document.querySelector('body');
//   body.style.overflow = "hidden"
//   await new Promise(resolve => setTimeout(resolve, 800));
//   screen.style.display = "none";
//   // document.getElementById('main').style.display = "block";
//   document.onload = leftline.style.display = 'flex';
//   document.onload = rightline.style.display = 'flex';
//   document.querySelector('body').style.overflow = "auto";
// }
// showLoadingScreen()


function showShadow(){
  let nav = document.getElementById('nav'); 
  let oldval = 0; 
  let newval = 0
  window.addEventListener('scroll', (e)=>{
    newval = window.pageYOffset;
    if(oldval<newval){
      //UP
      if(nav.classList.contains('navtoDown')){
        nav.classList.remove('navtoDown');
      }
      nav.classList.add('navtoTop');
      nav.classList.add('shadow-2xl');
      nav.classList.remove('sticky');
      nav.classList.add('realtive');
      nav.style.opacity = "0.9";
    }
    else if(oldval > newval && newval !=0){
      //Down
      if(nav.classList.contains('navtoTop')){
        nav.classList.remove('navtoTop');
      }
      nav.classList.add('navtoDown');
      nav.classList.add('shadow-2xl');
      nav.classList.add('sticky');
      nav.classList.remove('realtive');
    }
    else if(window.scrollY == 0){
      if(nav.classList.contains('shadow-2xl')){
        nav.classList.remove('shadow-2xl');
      }
    }
    oldval = newval;
  })
}

rain();
scrollTrigger(".scroll-reveal");
menu();
showShadow();
