const spawn = require("child_process").spawn;

let proc = spawn("java", ["-jar", "bot/Bot.jar"]);

let prettyKeys = {
    "0": "VK_0",
    "1": "VK_1",
    "2": "VK_2",
    "3": "VK_3",
    "4": "VK_4",
    "5": "VK_5",
    "6": "VK_6",
    "7": "VK_7",
    "8": "VK_8",
    "9": "VK_9",
    "A": "VK_A",
    "B": "VK_B",
    "C": "VK_C",
    "D": "VK_D",
    "E": "VK_E",
    "F": "VK_F",
    "G": "VK_G",
    "H": "VK_H",
    "I": "VK_I",
    "J": "VK_J",
    "K": "VK_K",
    "L": "VK_L",
    "M": "VK_M",
    "N": "VK_N",
    "O": "VK_O",
    "P": "VK_P",
    "Q": "VK_Q",
    "R": "VK_R",
    "S": "VK_S",
    "T": "VK_T",
    "U": "VK_U",
    "V": "VK_V",
    "W": "VK_W",
    "X": "VK_X",
    "Y": "VK_Y",
    "Z": "VK_Z",
    "\"": "VK_QUOTEDBL",
    "&": "VK_AMPERSAND",
    "*": "VK_ASTERISK",
    "@": "VK_AT",
    "^": "VK_CIRCUMFLEX",
    ":": "VK_COLON",
    ",": "VK_COMMA",
    "$": "VK_DOLLAR",
    "!": "VK_EXCLAMATION_MARK",
    ">": "VK_GREATER",
    "#": "VK_NUMBER_SIGN",
    "(": "VK_LEFT_PARENTHESIS",
    "-": "VK_MINUS",
    ".": "VK_PERIOD",
    "+": "VK_PLUS",
    ")": "VK_RIGHT_PARENTHESIS",
    ";": "VK_SEMICOLON",
    "<": "VK_LESS",
    "=": "VK_EQUALS",
    "_": "VK_UNDERSCORE",
    "/": "VK_SLASH",
    "`": "VK_BACK_QUOTE",
    "[": "VK_OPEN_BRACKET",
    "\\": "VK_BACK_SLASH",
    "]": "VK_CLOSE_BRACKET",
    "{": "VK_BRACELEFT",
    "}": "VK_BRACERIGHT",
    "'": "VK_QUOTE"
};

var robot = {
    hold: (key) => {
        if(!prettyKeys[key]){return;}

        proc.stdin.write(`P ${prettyKeys[key]}\n`);
    },

    release: (key) => {
        if(!prettyKeys[key]){return;}

        proc.stdin.write(`R ${prettyKeys[key]}\n`);
    },

    single: (key) => {
        if(!prettyKeys[key]){return;}

        proc.stdin.write(`P ${prettyKeys[key]}\n`);
        setTimeout(() => {proc.stdin.write(`R ${prettyKeys[key]}\n`);}, 100);
    }
};

proc.stderr.on("data", (data) => {
    console.log(data.toString());
});

module.exports = robot;