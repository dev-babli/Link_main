gsap.registerPlugin(ScrollTrigger);

let movementFactor = 0.8; // controls how much the backgrounds move. It's a percentage of the section's height. This can be negative if you want to move in the other direction.
let backgrounds = gsap.utils.toArray("section img.bg");

backgrounds.forEach((img, i) => {
  
  img.addEventListener("load", () => { // wait until the image loads because we need to ascertain the naturalWidth/naturalHeight
    
    fitImage(img, movementFactor);
    
    // the first image (i === 0) should be handled differently because it should start at the very top.
    // use function-based values in order to keep things responsive
    gsap.fromTo(img, {
      y: () => i ? -movementFactor * 0.5 * img.parentNode.offsetHeight : 0
    }, {
      y: () => movementFactor * 0.5 * img.parentNode.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: img.parentNode,
        start: () => i ? "top bottom" : "-1px top", 
        end: "bottom top",
        scrub: true,
        invalidateOnRefresh: true // to make it responsive
      }
    });
  })
  // Give the backgrounds some random images
  img.setAttribute("src", `https://assets.codepen.io/16327/portrait-pattern-${i + 1}.jpg`);

});

// whenever the window resizes, we should adjust the backgrounds to fit properly.
window.addEventListener("resize", () => backgrounds.forEach(img => fitImage(img, movementFactor)));

// fits the image into the parent proportionally while ensuring there's enough of a margin for the vertical movement.
function fitImage(img, marginFactor) {
  let sx = img.parentNode.offsetWidth / img.naturalWidth,
      sy = img.parentNode.offsetHeight * (1 + Math.abs(marginFactor)) / img.naturalHeight,
      scale = Math.max(sx, sy),
      w = Math.ceil(img.naturalWidth * scale),
      h = Math.ceil(img.naturalHeight * scale);
  gsap.set(img, {width: w, height: h, top: Math.ceil((img.parentNode.offsetHeight - h) / 2), left: Math.ceil((img.parentNode.offsetWidth - w) / 2), position: "absolute"});
}