gsap.from("#clabs",{
     
    y:110,
    duration:1,
    opacity:0,
     
    scrollTrigger:{
        trigger:"#page2 ",
        scroller:"body",
        start:"top -25%",
     
    }
     
}) 
gsap.from("#about h1 ",{
    x:70,
    duration:1,
    delay:3,
    opacity:0,
      
}) 
gsap.from("#about p ",{
    x:70,
    duration:1,
    delay:5,
    opacity:0,
    stagger:1
     
}) 
gsap.from("#clabOne",{
    x:70,
    duration:1,
    delay:7,
    opacity:0
})
gsap.from("#clabTwo",{
    x:70,
    duration:1,
    delay:8,
    opacity:0
})
gsap.from("#clabThree",{
    x:70,
    duration:1,
    delay:9,
    opacity:0
})
gsap.from("#clabOne h1",{
    opacity:0,
    duration:5,
    delay:9,
    opacity:0
})
gsap.from("#clabOne p",{
    opacity:0,
    duration:5,
    delay:9,
    opacity:0
})
gsap.from("#clabTwo h1",{
    opacity:0,
    duration:5,
    delay:9,
    opacity:0
})
gsap.from("#clabTwo p",{
    opacity:0,
    duration:5,
    delay:9,
    opacity:0
})
gsap.from("#clabThree h1",{
    opacity:0,
    duration:5,
    delay:9,
    opacity:0
})
gsap.from("#clabThree p",{
    opacity:0,
    duration:5,
    delay:9,
    opacity:0
})
 
gsap.from("#page1 #mainNav",{
     
    y:-110,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page1 ",
        scroller:"body",
        start:"top 10%",
    
    }
     
}) 
 
gsap.from(" #op h1 ",{
    y:80,
    opacity:0,
    
     scrollTrigger:{
        trigger:"#op ",
        scroller:"body",
        start:"top 10%",
    
    }
     
})