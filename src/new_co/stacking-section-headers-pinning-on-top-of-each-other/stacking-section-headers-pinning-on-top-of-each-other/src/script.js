const allTitles = gsap.utils.toArray('.row');
let offsets; // an Array with each title's offset
let totalOffset; // adds up all the heights of the titles

// to make it responsive, we put the calculations into a function that we call on window resize (and initially)
function calculateOffsets() {
  totalOffset = 0;
  offsets = allTitles.map(title => {
    let prev = totalOffset;
    totalOffset += title.querySelector("h1").offsetHeight;
    return prev;
  });
}
calculateOffsets();
window.addEventListener("resize", calculateOffsets);

allTitles.forEach((title, i) => {
    let heading = title.querySelector(".left");
    ScrollTrigger.create({
        trigger: heading,
        endTrigger: ".row-wrap",
        start: () => "top " + offsets[i],
        end: () => "bottom " + totalOffset,
        pin: heading,
        pinSpacing: false
    });
});