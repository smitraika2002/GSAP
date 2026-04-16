const tl = gsap.timeline();

// Intro animation
tl.from(".nav", { y: -60, opacity: 0, duration: 0.8 })
  .from(".title", { y: 40, opacity: 0, duration: 0.8 })
  .from(".subtitle", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
  .from(".btn", { opacity: 0, duration: 0.4 }, "-=0.4")
  .from(".right img", { x: 80, opacity: 0, duration: 0.8 }, "-=0.6");

// Feature stagger
gsap.to(".box", {
  y: -20,
  opacity: 1,
  duration: 0.6,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".features",
    start: "top 85%"
  }
});