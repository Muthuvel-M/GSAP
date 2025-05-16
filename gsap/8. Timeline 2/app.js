var tl = gsap.timeline({
    default:{
        duration:3,
    }
}).to("h1",{
    y:-100,
    color:"white",
}).to(".box1",{
    x:-100,
    backgroundColor:"red",
}).to(".box2",{
    y:100,
    backgroundColor:"purple",
}).to(".box3",{
    x:100,
    backgroundColor:"crimson",
})