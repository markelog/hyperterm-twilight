const black = '#141414';
const red = '#cf6a4d';
const green = '#8f9d6a';
const yellow = '#9b703f';
const blue = '#7587a6';
const magenta = '#9b859d';
const cyan = '#cda869';
const gray = '#9d9d9d';
const darkGray = '#3c4043';
const white = '#f8f8f8';

const foreground = white;
const background = black;

const border = darkGray;
const cursor = 'rgba(248,248,248,0.6)';

exports.decorateConfig = config => {
    return Object.assign({}, config, {
        backgroundColor: background,
        foregroundColor: foreground,
        borderColor: border,
        cursorColor: cursor,

        colors: {
          black: black,
          red: red,
          green: green,
          yellow: yellow,
          blue: blue,
          magenta: magenta,
          cyan: cyan,
          gray: gray,
          white: white,
          lightBlack: black,
          lightRed: red,
          lightGreen: green,
          lightYellow: yellow,
          lightBlue: blue,
          lightMagenta: magenta,
          lightCyan: cyan,
          lightGray: gray,
          lightWhite: white
        },

        css: `
            ${config.css || ''}
            .tab_active:before {
                border-color: rgba(207, 106, 77, 0.3);
            }
        `
    });
};
