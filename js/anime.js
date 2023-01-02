"use strict"
(function(){
 let tri = document.getElementById("tri");

 function animate() {
    // Update the offset-distance value
    tri.style.offsetDistance = (parseInt(tri.style.offsetDistance) + 1) % 100 + '%';
    
    // Request another animation frame
    requestAnimationFrame(animate);
  }
  
  // Start the animation loop
  animate();




})();