gsap.registerPlugin(ScrollTrigger)

let boxes = gsap.utils.toArray("#container .w-96"),
    container = document.querySelector("#container"),
    text = document.querySelector("#text"),
    padding = gsap.getProperty(container, "paddingTop", "px"),
    // create a ScrollTrigger for each box that we can use to calculate snapping (we'll look at the "start" of each in the onRefresh)
    snapTriggers = boxes.map(box => ScrollTrigger.create({
      trigger: box,
      start: "top " + padding + "px"
    })),
    snaps = []; // where we'll store the progress value for each box's ScrollTrigger (start)

ScrollTrigger.create({
  trigger: '#container',
  markers: true,
  pin: '#text',
  pinSpacing: false,
  start: "top top",
  end: () => "+=" + (boxes[boxes.length-1].getBoundingClientRect().top - boxes[0].getBoundingClientRect().top),
  onRefresh: self => {
    // re-populate the "snaps" Array with the progress values for where each box hits the target spot.
    let distance = self.end - self.start;
    snapTriggers.forEach((trigger, i) => snaps[i] = (trigger.start - self.start) / distance);
  },
  snap: snaps
});

// for swapping in the text for each section
boxes.forEach((box, i) => {
  ScrollTrigger.create({
    trigger: box,
    start: "top center",
    end: "bottom center",
    onToggle: self => {
      if (self.isActive) {
        // you could animate this in (fade it or whatever)
        text.innerText = "Text blurb " + (i+1);
      }
    }
  });
});
