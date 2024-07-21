// program to copy a string to the clipboard

const { JSDOM } = require("jsdom");
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');

const copy_to_Clipboard = str => {
    const el = dom.window.document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    dom.window.document.body.appendChild(el);
    el.select();
    
    // This will not actually copy to the clipboard in a Node.js environment
    // It's for demonstration purposes
    const successful = dom.window.document.execCommand('copy');
    dom.window.document.body.removeChild(el);
    
    if (!successful) {
        console.error('Failed to copy text');
    }
};

// Example usage
copy_to_Clipboard('Hello, world!');


// const clipboardy = require('clipboardy');

// const copy_to_Clipboard = str => {
//     clipboardy.writeSync(str);
// };

// // Example usage
// copy_to_Clipboard('Hello, world!');
// console.log('Text copied to clipboard: Hello, world!');

