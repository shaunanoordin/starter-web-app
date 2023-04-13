/*
Starter JS
----------

Starter template for JavaScript web app projects.

(Shaun A. Noordin | shaunanoordin.com | 20230413)
 */

import logo from '@src/logo-32x32.png'
import { ImportExample } from '@src/importExample.js'

/*  Primary App Class
 */
//==============================================================================
class App {
  constructor() {
    const importExample = new ImportExample('HI THERE')

    const span1 = document.createElement('span')
    span1.innerHTML = `
      This is a starter template for JS projects. <br> 
      ${importExample.getText()} <br>
      <br>
    `

    const span2 = document.createElement('span')
    span2.innerHTML = `
      An image was imported via JavaScript.
      Functionally, there's some overlap with images that aren't bundled and reside
      naturally in the /assets folders, but it's a good example of Webpack's
      "Asset Modules". Anyway, here it is: <br>
    `

    const img = document.createElement('img')
    img.src = logo

    this.console = document.getElementById('console')
    this.console.appendChild(span1)
    this.console.appendChild(span2)
    this.console.appendChild(img)

  }
}
//==============================================================================

/*  Initialisations
 */
//==============================================================================
var app
window.onload = function() {
  window.app = new App()
}
//==============================================================================
