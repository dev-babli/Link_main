gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// --- RED PANEL ---
gsap.from(".line-1", {
  scrollTrigger: {
    trigger: ".line-1",
    scrub: true,
    start: "top bottom",
    end: "top top"
  },
  scaleX: 0,
  transformOrigin: "left center", 
  ease: "none"
});


// --- ORANGE PANEL ---
gsap.from(".line-2", {
  scrollTrigger: {
    trigger: ".orange",
    scrub: true,
    pin: true,
    start: "top top",
    end: "+=100%"
  },
  scaleX: 0, 
  transformOrigin: "left center", 
  ease: "none"
});


// --- GREEN PANEL ---
var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".green",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%",
    }
  });

tl.from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
  .to(".flair", {rotation: 360}, 0);


let links = gsap.utils.toArray("nav a");
links.forEach(a => {
  let element = document.querySelector(a.getAttribute("href")),
      linkST = ScrollTrigger.create({
            trigger: element,
            start: "top top"
          }),
      highlightST = ScrollTrigger.create({
        trigger: element,
        start: "top center",
        end: "bottom center",
        onToggle: self => self.isActive && setActive(a)
      });
  a.addEventListener("click", function(e) {
    e.preventDefault();
    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
  });
});

function setActive(link) {
  links.forEach(el => el.classList.remove("active"));
  link.classList.add("active");
}




