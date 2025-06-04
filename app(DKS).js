gsap.fromTo(
  ".loading",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 1.3,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 55,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay:0.5
  }
);
