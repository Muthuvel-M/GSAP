document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip);
let container = document.querySelector(".container");
let box = document.querySelector(".box");

document.addEventListener("click", (e)=>{
    let state = Flip.getState(".box");
    container.appendChild(box);
    Flip.from(state,{
        duration:2,
        ease: "power4.out",
        borderRadius:100,
    })
});
});

gsap.registerEffect({
    name:"rotate",
    defaults:{duration:2},
    effect:(target,config)=>{
        return gsap.to(target,
            {
                duration:config.duration,
                opacity:0.5,
                rotate:360,
                borderRadius:100,
                repeat:1})
    }
});

document.querySelectorAll(".boxx").forEach(function(boxx) {
    boxx.addEventListener("mouseenter", function() {
      gsap.effects.rotate(this);
    });
  });