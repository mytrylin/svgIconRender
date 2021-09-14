import config  from './svgIconHandler.js'
import lib     from './svnIconLib.js'
import basic   from './svnIconBasicShapesModel.js'

let basicList = basic.basicList

/* iconSVG make*/
let makeSVG = (tagData = config.iconSVG) => {
  let tag = tagData.tag     || 'svg'
  let attrs = tagData.attrs || {}
  let xmlSpaceName = (tagData.xmlSpaceName)? tagData.xmlSpaceName : config.xmlSpaceName
  let el = document.createElementNS(xmlSpaceName, tag)

  for (let k in attrs)
    el.setAttribute(k ,attrs[k])
  
  return el
}


/**
  renderList  : 由iconList產生的渲染序列
                加註: 以iconList資料中的iconName，作為序列的分批依據，再將有套用渲染功能的element，重新分配到相對應的序列中
  iconNames   : 各序列是用iconName作為分類，序列內是多個element的集合，型別:Array
  elItem      : 分類下的每個element項目，型別:Array
  unit       : icon內部各個組成單元，型別:Object
  iconList[i] : 值是iconName，型別:String
*/

export let renderGo = (renderData) => {
  // console.log(renderData)
  let renderList = renderData['renderList']
  let iconList   = renderData['iconList']
  let iconSVG    = renderData['iconSVG']
  renderList && renderList.forEach((iconNames, i) => {
    iconNames.forEach((elItem, k) => {
      let icon = lib['iconName'][iconList[i]]
      let svg  = {}

      svg['tag']   = 'svg'
      svg['attrs'] = (icon['attrs'])? icon['attrs'] : iconSVG['attrs']

      /*step1 : 為icon製造一個容器 (svg tag)*/
      elItem.append(makeSVG(svg))

      /*step2 : 對該svg容器，加入各項unit構成單元 */
      icon['units'].forEach( (unit, s) => {
        /*step3 : 對該unit單元，加入各項單元屬性、及attrs賦值 */
        elItem.querySelector('svg').append(makeSVG(unit))
      })
    })
  })
}

export let getRenderData = function (iconSetting = config) {
  let iconSVG  = (iconSetting && iconSetting.iconSVG)? iconSetting.iconSVG : config.iconSVG
  let iconList = (iconSetting && iconSetting.iconList)? 
    (iconSetting.iconList).filter((val, key, arr) => { 
      return arr.indexOf(val) === key }) : Object.keys(lib['iconName'])
  let renderList = iconList
    .map(iconName => { return document.querySelectorAll(`.${iconName}`)})
      .filter(li =>  { return li.length !== 0 })
  let renderData = {
    renderList,
    iconList,
    iconSVG
  }
  return renderData
}

export let renderIcon = function (iconSetting = config) {
  renderGo(getRenderData(iconSetting))
}

export {
  config,
  lib,
  basicList
}