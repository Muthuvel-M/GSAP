
gsap.to(".box",{
    duration:1,
    ease:"power1.inOut",
    yoyo:true,
    scale:0.1,
    repeat:-1,
    stagger:{
        each:0.1,
        from:"random", //one dimension
        grid:"auto"

        
    }
});