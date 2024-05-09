function animate({duration, draw, timing}) {

    let start = performance.now();
  
    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
  
      let progress = timing(timeFraction)
  
      draw(progress);
  
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
  
    });
  }

  function contrairExpandir() {
  var img = document.getElementById("myImage");
  if (img.style.transform === "scale(1)") {
    img.style.transform = "scale(0.5)";
  } else {
    img.style.transform = "scale(1)";
  }
}

