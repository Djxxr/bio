document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const stars = document.querySelectorAll(".star");
  
    stars.forEach((star) => {
      const starX = star.offsetLeft + star.offsetWidth / 2;
      const starY = star.offsetTop + star.offsetHeight / 2;
      const distance = Math.sqrt(
        Math.pow(mouseX - starX, 2) + Math.pow(mouseY - starY, 2)
      );
      const maxDistance = 100; 
  
      if (distance < maxDistance) {
        const scale = 1 - distance / maxDistance; 
        const translateX = (mouseX - starX) * scale * 0.2;
        const translateY = (mouseY - starY) * scale * 0.2;
        star.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
      } else {
        star.style.transform = "translate(0, 0) scale(1)";
      }
    });
  });