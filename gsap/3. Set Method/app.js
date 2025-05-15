gsap.set(".box",{
opacity: 0,
background: "yellow",
});
gsap.to(".box",{
    opacity: 1,
    background: "purple",
    duration: 2,
    rotate: 180,
    repeat:-1,
    // yoyo: true,
    x:100,
    // scale: 0.5,
});