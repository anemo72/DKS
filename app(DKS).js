const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movielist = ['videos/hero-1.mp4', 'videos/hero-2.mp4', 'videos/hero-3.mp4', 'videos/hero-4.mp4',];

let index = 0
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movielist[index]

    if(index === 3){
        index = -1
    }
        
})

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