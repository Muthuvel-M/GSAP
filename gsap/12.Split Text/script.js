document.addEventListener = ("DOMContentLoad",(e)=>{
    gsap.registerPlugin(SplitText) 

    let split = SplitText.create(".split",{type:"words,chars"});

    gsap.from(split.words,{
        duration: 1,
        y:-100,
        autoAlpha:0,
        stagger:{
            each:0.5,}

    })


});