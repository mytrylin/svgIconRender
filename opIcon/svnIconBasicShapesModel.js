/* SVG圖形基底模型分類 */
import path from './svgIconUnitPath.js'
import cricle   from './svgIconUnitCricle.js'
// import ellipse  from './svgIconUnitEllipse.js'
// import rect     from './svgIconUnitRect.js'
// import polygon  from './svgIconUnitPolygon.js'
// import line     from './svgIconUnitLine.js'
// import polyline from './svgIconUnitPolyline.js'

let basicList = []

let basicShapes = {
  path,
  cricle,
  // ellipse,
  // rect,
  // polygon,
  // line,
  // polyline
}

Object.keys(basicShapes).forEach((item, index) => {
  basicList[item] = {}
  basicList[item] = basicShapes[item]['units']
})

export default {
  basicShapes,
  basicList
}