(function () {
  "use strict";
  let resume = document.getElementById("resume");
  let footer = document.getElementById("footer");

  window.addEventListener("scroll", () => {
    // resume.style.display = "none";
    // console.log(window.scrollY);
    // console.log(resume);
    if (window.scrollY >= 3264) {
      resume.style.visibility = "hidden";
    } else {
        resume.style.visibility = "visible";

    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } 
    //   else {
    //     entry.target.classList.remove("show");
    //   }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden");

  hiddenElements.forEach((el) => {
    observer.observe(el);
  });
})();
