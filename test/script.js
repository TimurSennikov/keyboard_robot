const robot = require("keyboard_robot");

let k = 0;
"Hello-Keyboard-World.".split("").forEach((char) => {
    k++;
    setTimeout(() => {robot.single(char.toUpperCase())}, 150 * k);
});