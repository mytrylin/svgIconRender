import * as icon from './opIcon/svgIconRender.js'

let icons = Object.keys(icon.lib.iconName)
let $iconBar = document.querySelector('.icon-bar')

icons.forEach(icon => {
  let el = document.createElement("div")
  el.setAttribute('class', `icon ${icon}`)
  el.setAttribute('title', icon)
  $iconBar.append(el)
})

console.log(icon)
icon.renderIcon()