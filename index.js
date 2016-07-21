const black = '#141414';
const red = '#cf6a4d';
const green = '#8f9d6a';
const yellow = '#9b703f';
const blue = '#7587a6';
const magenta = '#9b859d';
const cyan = '#cda869';
const gray = '#9d9d9d'
const white = '#f8f8f8';

const foreground = white;
const background = black;

const border = black;
const cursor = '#3c4043';

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor: background,
        foregroundColor: foreground,
        borderColor: border,
        cursorColor: cursor,

        colors: [
            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            gray,

            black,
            red,
            green,
            yellow,
            blue,
            magenta,
            cyan,
            gray,
            white
        ],
        css: `
            ${config.css || ''}
            .tab_active:before {
                border-color: rgba(207, 106, 77, 0.3);
            }
        `
    });
};
