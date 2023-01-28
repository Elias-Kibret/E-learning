let carsouleImages = [
	"./images/Carsoule/carsoule-1.png",
	"./images/Carsoule/carsoule-2.png",
	"./images/Carsoule/carsoule-3.png",
	"./images/Carsoule/carsoule-4.png",
];
let i = 0;
document.querySelector(".next-btn").addEventListener("click", function () {
	console.log("clicked");

	if (i >= 0 && i < carsouleImages.length) {
		document.getElementById("carsoul-image").src = carsouleImages[i];
		i++;
	} else {
		i = 0;
	}
});

document.querySelector(".prev-btn").addEventListener("click", function () {
	console.log("clicked");

	if (i >= 0 && i < carsouleImages.length) {
		document.getElementById("carsoul-image").src = carsouleImages[i];
		i--;
	} else {
		i = 0;
	}
});

const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () =>
	container.classList.add("right-panel-active")
);

signInButton.addEventListener("click", () =>
	container.classList.remove("right-panel-active")
);

// https://Github.com/YasinDehfuli
// 	 https://Codepen.io/YasinDehfuli
// Disigned By Nisay
