import { JSDOM } from 'jsdom'
const jsdom = new JSDOM('<!DOCTYPE html><html><head></head><body><div id="div"></div></body></html>')
global.window = jsdom.window;
global.document = jsdom.window.document;
global.navigator = {
  userAgent: 'node.js'
}
global.localStorage = {
  getItem () {
    return 'localStorage'
  }
}
global.div = document.getElementById('div')
