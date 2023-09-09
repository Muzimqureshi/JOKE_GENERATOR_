
document.addEventListener("DOMContentLoaded", function() {
      "use strict";  

      // Smooth scrolling on the navbar links
      var navbarLinks = document.querySelectorAll(".navbar-nav a");
      for (var i = 0; i < navbarLinks.length; i++) {
          navbarLinks[i].addEventListener("click", function(event) {
              if (this.hash !== "") {
                  event.preventDefault();

                  var targetElement = document.querySelector(this.hash);
                  var offset = 45;
                  var targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

                  window.scrollTo({
                      top: targetPosition,
                      behavior: "smooth"
                  });

                  var activeLinks = document.querySelectorAll(".navbar-nav .active");
                  for (var j = 0; j < activeLinks.length; j++) {
                      activeLinks[j].classList.remove("active");
                  }
                  this.closest("a").classList.add("active");
              }
          });
      }

      // ... (rest of your existing JavaScript code) ...
  });

