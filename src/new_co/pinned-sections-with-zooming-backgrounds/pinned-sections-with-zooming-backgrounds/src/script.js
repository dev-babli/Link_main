gsap.registerPlugin(ScrollTrigger, EasePack);

const sections = gsap.utils.toArray("section");

sections.forEach(section => {
  const text = section.querySelector("p"),
        image = section.querySelector(".img");
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      pin: true,
      anticipatePin: 1,
      scrub: 1,
      start: "top top",
      end: "bottom top"
    }
  });
  tl.from(text, {opacity: 0, y: 100})
    .from(image, {scale: 0, ease: "expoScale(0.01, 1, expo.out)", duration: 1})
    .to(text, {opacity: 0, y: -100, ease: "power1.in"});
});