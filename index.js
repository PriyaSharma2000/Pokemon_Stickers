let btns = document.querySelectorAll(".btn");

for (var i = 0; i < btns.length; i++) {
  document.querySelectorAll(".btn")[i].onclick = function (e) {
    let image = document.querySelectorAll(".image");
    console.log(e.target.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.classList.toggle("do-flip");
  };
}

let btn2 = document.querySelectorAll(".btn2");
for (var i = 0; i < btn2.length; i++) {
  document.querySelectorAll(".btn2")[i].onclick = function (e) {
    console.log(e.target.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.classList.toggle("do-flip");
  };
}

let slideIndex = 1;
showSlides((slideIndex));

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let mySlides = document.getElementsByClassName("mySlides");
  if (n > mySlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = mySlides.length;
  }
  for (let i = 0; i < mySlides.length; i++) {
    mySlides[i].style.display = "none";
  }
  mySlides[slideIndex - 1].style.display = "flex";
}
