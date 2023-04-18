const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    // Add the following lines to show/hide the menu
    if (navMenu.classList.contains("active")) {
      navMenu.style.opacity = "1";
      navMenu.style.visibility = "visible";
    } else {
      navMenu.style.opacity = "0";
      navMenu.style.visibility = "hidden";
    }
  }


  const navLinks = document.querySelectorAll('nav .test');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});


// Modal

function openModal() {
  document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal1() {
  document.getElementById("myModal1").style.display = "flex";
}

function closeModal1() {
  document.getElementById("myModal1").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal1");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal2() {
  document.getElementById("myModal2").style.display = "flex";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal2");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal3() {
  document.getElementById("myModal3").style.display = "flex";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal3");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function openModal4() {
  document.getElementById("myModal4").style.display = "flex";
}

function closeModal4() {
  document.getElementById("myModal4").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal4");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal5() {
  document.getElementById("myModal5").style.display = "flex";
}

function closeModal5() {
  document.getElementById("myModal5").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal5");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal6() {
  document.getElementById("myModal6").style.display = "flex";
}

function closeModal6() {
  document.getElementById("myModal6").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal6");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function openModal7() {
  document.getElementById("myModal7").style.display = "flex";
}

function closeModal7() {
  document.getElementById("myModal7").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal7");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal8() {
  document.getElementById("myModal8").style.display = "flex";
}

function closeModal8() {
  document.getElementById("myModal8").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal8");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function openModal9() {
  document.getElementById("myModal9").style.display = "flex";
}

function closeModal9() {
  document.getElementById("myModal9").style.display = "none";
}

// Close the modal when the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById("myModal9");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

