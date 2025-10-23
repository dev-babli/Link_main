gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// the magic helper function...
function getScrollPosition(animation, progress) {
  let p = gsap.utils.clamp(0, 1, progress || 0),
      nested = !animation.scrollTrigger,
      st = nested ? animation.parent.scrollTrigger : animation.scrollTrigger,
      containerAnimation = st.vars.containerAnimation,
      range = st.end - st.start,
      position = st.start + range * p;
  if (containerAnimation) {
    st = containerAnimation.scrollTrigger;
    return (st.start + (st.end - st.start) * (position / containerAnimation.duration()));
  } else if (nested) {
    let start = st.start + (animation.startTime() / animation.parent.duration()) * range,
        end = st.start + ((animation.startTime() + animation.duration()) / animation.parent.duration()) * range;
    return start + (end - start) * p;
  }
  return position;
}


let sections = gsap.utils.toArray(".container .panel");

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none", // <-- IMPORTANT!
    scrollTrigger: {
      trigger: ".container",
      pin: true,
      scrub: 0.1,
      //snap: directionalSnap(1 / (sections.length - 1)),
      end: "+=3000",
      markers: true,
    }
  });

gsap.set(".box-1, .box-2", {y: 100});
ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

// red section
let redTween = gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "left center",
    toggleActions: "play none none reset",
    id: "1",
  }
});

document.querySelector("#scrollTo").addEventListener("click", () => {
  gsap.to(window, {scrollTo: getScrollPosition(redTween)});
});



// gray section
gsap.to(".box-2", {
  y: -120,
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 20%",
    scrub: true,
    id: "2"
  }
});

// purple section
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 60%",
  id: "3"
});

// green section
ScrollTrigger.create({
  trigger: ".green",
  containerAnimation: scrollTween,
  start: "left 30%",
  end: "right 80%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: self => console.log("active", self.isActive),
  id: "4"
});

// only show the relevant section's markers at any given time
gsap.set(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end", {autoAlpha: 0});
["red","gray","purple","green"].forEach((triggerClass, i) => {
  ScrollTrigger.create({
    trigger: "." + triggerClass,
    containerAnimation: scrollTween,
    start: "left 30%",
    end: i === 3 ? "right right" : "right 30%",
    markers: false,
    onToggle: self => gsap.to(".marker-" + (i+1), {duration: 0.25, autoAlpha: self.isActive ? 1 : 0})
  });
});

// helper function for causing the sections to always snap in the direction of the scroll (next section) rather than whichever section is "closest" when scrolling stops.
// function directionalSnap(increment) {
//   let snapFunc = gsap.utils.snap(increment);
//   return (raw, self) => {
//     let n = snapFunc(raw);
//     return Math.abs(n - raw) < 1e-4 || (n < raw) === self.direction < 0 ? n : self.direction < 0 ? n - increment : n + increment;
//   };
// }