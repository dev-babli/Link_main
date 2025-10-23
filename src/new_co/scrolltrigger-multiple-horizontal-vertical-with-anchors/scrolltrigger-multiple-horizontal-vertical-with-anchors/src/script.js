console.clear();

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".section");
const tl = gsap.timeline({
  defaults: {
    ease: "none"
  },
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top top",
    end: "+=6000",
    pin: true,
    scrub: true,
    markers: true
  }
});

sections.forEach((section, i) => {
  const panels = gsap.utils.toArray(".panel", section);
  tl.to(
    section,
    {
      y: section.clientHeight - section.scrollHeight,
      duration: panels.length * 0.5
    },
    "section-" + i
  );
  if (sections[i + 1]) {
    tl.to(".content", {
      xPercent: -100 * (i + 1)
    });
  }
});

const buttons = gsap.utils.toArray(".section-btn");
buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: {
        y: tl.scrollTrigger.labelToScroll("section-" + i)
      },
      ease: "power1.inOut"
    });
  });
});

const overflowBtn = document.getElementById("btn-overflow");
overflowBtn.addEventListener("click", () =>
  container.classList.toggle("no-overflow")
);
