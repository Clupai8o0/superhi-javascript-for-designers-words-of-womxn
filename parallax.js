const sections = document.querySelectorAll("section");
const bodyTag = document.querySelector("body");

const addMovement = () => {
	const topViewport = window.scrollY;
	const midViewport = topViewport + window.innerHeight / 2;

	sections.forEach((section, i) => {
		const topSection = section.offsetTop;
		const midSection = topSection + section.offsetHeight / 2;

		const distanceToSection = midViewport - midSection;

		const image = section.querySelector("img");
		const contentTag = section.querySelector("div");

		let rotation = distanceToSection / 100;
		let contentDist = (-1 * distanceToSection) / 2;

    if (i % 2 === 0) {
      rotation = rotation * -1;      
    }

		image.style.transform = `rotate(${rotation}deg)`;

		contentTag.style.top = `${contentDist}px`;
    contentTag.style.transform = `rotate(${-rotation}deg)`;

    if (distanceToSection > -100) {
      bodyTag.style.backgroundColor = section.getAttribute('data-background');
    }
	});
};

addMovement();

document.addEventListener("scroll", () => {
	addMovement();
});

window.addEventListener("resize", () => {
	addMovement();
});
