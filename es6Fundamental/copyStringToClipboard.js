// program to copy a string to the clipboard

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM();


const copy_to_Clipboard = str => {
    const el = dom.window.document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    dom.window.document.body.appendChild(el);
    const selected =
    dom.window.document.getSelection().rangeCount > 0 ? dom.window.document.getSelection().getRangeAt(0) : false;
    el.select();
    dom.window.document.execCommand('copy');
    dom.window.document.body.removeChild(el);
    if (selected) {
        dom.window.document.getSelection().removeAllRanges();
        dom.window.document.getSelection().addRange(selected);
    }
  };
  