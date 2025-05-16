var tl = gsap.timeline({
    defaults:{
        opacity:0,
        ease:"linear",
        duration:1,
    }
})
tl.fromTo(".sidebar",{
    width:0,
},{
    opacity:1,
    width:"30%",
})
tl.fromTo(".main-img",{x:0},{opacity:1});
tl.fromTo(".content",{x:100},{opacity:1,x:0});

gsap.from(".title",{
    y:-100,
    duration:1.5,
})
gsap.from(".menu",{
    x:400,
    duration:1.5,
})