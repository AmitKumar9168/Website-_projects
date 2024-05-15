const number = document.getElementById("num");

const min = 80;
const max = 82;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
let counter = 0;

const time = 2000 / randomNum;

setInterval(() => {
    if (counter === randomNum) {
        clearInterval();
        number.innerHTML = randomNum + "%";
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, time);

const css = window.document.styleSheets[0]; 

const stroke = 440 - (440 * (randomNum / 100));

css.insertRule(`
@keyframes anim {
    100% {
        stroke-dashoffset: ${stroke};
    }
}
`, css.cssRules.length);



