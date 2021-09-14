/* SVG 圖形構成單元 unit: cricle */
let units = {}
let tag = 'cricle'
let unitList = []

/* unit 結構 */
/*
  let check = {
    attrs: {
      'd': 'm87......'
    }
  }
*/

/* unit名稱 - 使用於svgIconLib.js */
// units['check'] = check

unitList = Object.keys(units)
unitList.forEach( name => { 
  units[name]['tag']  = tag
  units[name]['name'] = name
})

export default {
  units,
  unitList,
  tag
}