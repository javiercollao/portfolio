let tl = gsap.timeline()
tl.from(".lazy-title", { x: 30, duration: 1, opacity: 0 ,  stagger: 0 },0)
tl.from(".lazy-content", { x: -30, duration: 1, opacity: 0 ,  stagger: 0 },0)
tl.from(".lazy-circle", { scaleX: 20, scaleY: 20,  duration: 1, opacity: 0 ,  stagger: 0 },0)
tl.from(".lazy-profile", {duration: 1, opacity: 0 ,  stagger: 0 })
tl.from(".lazy-loader-list", {duration: 1, opacity: 0 ,  stagger: .5 }, 0)
tl.from(".lazy-loader-project", {duration: 1, opacity: 0 ,  stagger: .5,  delay: 1}, 0)
