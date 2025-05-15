// from &  fromto method
// from method -> u dont have to specify initial state (it will figure it out by itself).
// fromto method -> u "have to specify" default value and also the new animation state.

// from

gsap.from(".box1",{
    x:-200,
    duration:2,
    ease:"bounce",
    repeat:-1,
    opacity:0,
    yoyo:true,
})

// fromto

gsap.fromTo(".box2",{
    y:200,
    scale:0.5,
    opacity:0,
},{
    opacity:1,
    y:0,
    duration:2,
    ease:"bounce",
    borderRadius:0,
    repeat:-1,
    scale:1,
    yoyo:true,
});

gsap.fromTo(".box3",{
    x:400,
    opacity:0,
},{
    x:0,
    opacity:1,
    duration:2,
    ease:"bounce",
    repeat:-1,
    yoyo:true,
});