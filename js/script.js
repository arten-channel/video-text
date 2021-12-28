const btn = document.querySelector("button");
const input = document.querySelector("input");
let second = 3,
	dmList = [],
	dmY = [18, 36, 54];

btn.addEventListener("click", function () {

	const val = input.value;
	if (val.trim() !== "") {
		input.value = "";
		this.className = "btn_active";
		this.innerHTML = `${second} s`;
		const timer = setInterval(() => {
			second--;
			this.innerHTML = `${second} s`;
			if (second === 0) {
				clearInterval(timer);
				this.className = "";
				this.innerHTML = "Send";
				second = 3;
			}
		}, 1000);
		
		dmList.push({
			text: val,
			x: 600,
			y: dmY[parseInt(Math.random() * 3)],
		});
	}
});

input.addEventListener("keyup", (e) => {
	if (e.keyCode === 13) {
		btn.click();
	}
});

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "18px Microsoft Yahei";
ctx.fillStyle = "#fff";
const draw = () => {
	dmList.forEach((item) => item.x--);
	requestAnimationFrame(() => {
		ctx.clearRect(0, 0, 600, 300);
		dmList.forEach((item) => ctx.fillText(item.text, item.x, item.y));
	});
	setTimeout(() => {
		draw();
	}, 1000 / 60);
};
draw();
