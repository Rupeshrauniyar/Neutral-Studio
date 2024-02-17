/* const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});  */
 window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    var video= document.getElementById("video");
    if (document.body.scrollTop > 1400 || document.documentElement.scrollTop > 1400) {
      video.style.display = "none";
    } else {
      video.style.display = "block";
    }
  }

const h3 = new SplitType("#page2-h3") 

let tl1 = gsap.timeline({
scrollTrigger : {
trigger:'.page2',
start:"10% center",
end:"20% center",
scrub:1,

},
});
tl1.to(".char",{
opacity:1,
stagger:0.1,
},"same")
tl1.to("#page2-h4",{
y:0,
stagger:0.5,
},"same")
