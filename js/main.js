const steps = document.querySelectorAll(".step");

let currentIndex = 0;

function animateButtons() {
  steps[currentIndex].classList.remove("enlarged");
  currentIndex = (currentIndex + 1) % steps.length;
  steps[currentIndex].classList.add("enlarged");
}

setInterval(animateButtons, 1000);
