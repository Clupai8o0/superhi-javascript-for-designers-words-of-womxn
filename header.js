const headerTag = document.querySelector("header");

document.addEventListener("scroll", () => {
	const pixels = window.scrollY;

	if (pixels > 80) {
		headerTag.classList.add("scrolled");
	} else {
		headerTag.classList.remove("scrolled");
	}
});
