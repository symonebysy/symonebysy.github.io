import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const slides = gsap.utils.toArray(".slide");

// stato iniziale
gsap.set(slides, {
	opacity: 0,
	y: 50
});
gsap.set(slides[0], {
	opacity: 1,
	y: 0
});

// timeline controllata dallo scroll
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".scroll-slides",
		start: "top top",
		end: `+=${slides.length * 100}%`,
		scrub: true,
		pin: true,
		anticipatePin: 1
	}
});

slides.forEach((slide, i) => {
	if (i === 0) return;

	tl
		.to(slides[i - 1], {
			opacity: 0,
			y: -50,
			duration: 1
		})
		.fromTo(slide,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1 }
		);
});

