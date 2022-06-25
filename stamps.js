const stamps = [
	"circles.svg",
	"heart.svg",
	"moon.svg",
	"rainbow.svg",
	"shooting-star.svg",
	"waves.svg",
];

const stampsTag = document.querySelector("div.stamps");

const addStamp = (x, y) => {
	const img = document.createElement("img");
	img.setAttribute(
		"src",
		`assets/${stamps[Math.floor(Math.random() * stamps.length)]}`
	);
	img.style.left = (x - window.innerWidth / 2) + "px";
	img.style.top = y + "px";

	stampsTag.appendChild(img);

  const audio = document.createElement("audio");
  audio.setAttribute("src", "assets/plop.mp3");
  audio.play()
};

document.addEventListener("click", (event) => {
	addStamp(event.pageX, event.pageY);
});
