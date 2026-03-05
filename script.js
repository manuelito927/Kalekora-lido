// ============================
// NAVBAR CHANGE ON SCROLL
// ============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.style.background = "rgba(255,255,255,0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    header.style.background = "white";
    header.style.boxShadow = "none";
  }

});


// ============================
// SMOOTH SCROLL MENU
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

  });

});


// ============================
// FADE IN SECTIONS
// ============================

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }

  });

});

document.querySelectorAll(".section").forEach(section => {
  observer.observe(section);
});


// ============================
// CONTACT FORM
// ============================

const form = document.querySelector(".contact-form");

if(form){

  form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    if(!name || !email || !message){
      alert("Compila tutti i campi");
      return;
    }

    alert("Messaggio inviato! (demo)");

    form.reset();

  });

}