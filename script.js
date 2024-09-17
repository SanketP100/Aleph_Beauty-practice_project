gsap.to("#page2 #content", {
  transform: "translateY(-20%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -55%",
    pin: true,
    scrub: 1,
    //   markers: true // Remove this line when not debugging
  },
});
