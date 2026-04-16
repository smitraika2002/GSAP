gsap.registerPlugin(ScrollTrigger);

// Timeline (clean sequence)
const tl = gsap.timeline();

tl.from(".navbar", {
  y: -80,
  opacity: 0,
  duration: 1
})
.from(".hero-title", {
  y: 50,
  opacity: 0,
  duration: 1
})
.from(".hero-text", {
  y: 30,
  opacity: 0,
  duration: 1
}, "-=0.5")
.from(".cta", {
  y: 20,
  opacity: 0,
  duration: 1
}, "-=0.5")
.from(".hero-image img", {
  x: 100,
  opacity: 0,
  duration: 1
}, "-=0.8");

// Scroll animation
gsap.to(".card", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 80%"
  },
  y: -40,
  opacity: 1,
  duration: 1,
  stagger: 0.3
});