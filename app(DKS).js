gsap.fromTo(
  ".loading",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.3,
    delay: 1.9,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 70,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2.5,
    delay:0.8
  }
);
