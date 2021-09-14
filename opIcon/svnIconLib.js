/* icon 資源庫 */
import basic  from './svnIconBasicShapesModel.js';
import config from './svgIconHandler.js'
// let opTurn = string => {}

let fillConfig    = config.iconSVG.attrs.fill
let classConfig   = config.iconSVG.attrs.class
let viewBoxConfig = config.iconSVG.attrs.viewBox
let path          = basic.basicShapes.path.units
let cricle        = basic.basicShapes.cricle.units

let iconName = {}

/* icon item */
/*
  let iconCardList = {
    'units': [
      path.cardListBase,   //圖形類型(path).構成單元名稱(cardListBase)
      path.cardListSymbol  //組裝順序，會影響圖層堆疊排列先後，後面項目會疊在前面
    ],
  }
*/
let iconCalculatorCheck = {
  'units': [
    path.borderRadiusEnpty,
    path.check,
    path.tipTop,
  ],
}
let iconSearch = {
  'units': [
    path.search
  ],
}
let iconCardList = {
  'units': [
    path.cardListBase,
    path.cardListSymbol
  ],
}
let iconGearFill = {
  'units': [
    path.gearFillBase,
  ],
}
let iconCalculator = {
  'units': [
    path.calculatorBase,
    path.calculatorSymbol,
  ],
}
let iconCalculatorSleek = {
  'units': [
    path.calculatorSleek,
  ],
  'attrs': {
    'fill': fillConfig,
    'class': classConfig,
    'viewBox': '-1 -2 26 26',
  }
}
let iconDialogue = {
  'units': [
    path.dialogueBase,
    path.dialogueRowTopPieces,
    path.dialogueRowMiddlePieces,
    path.dialogueRowBottomPieces
  ],
  'attrs': {
    'fill': fillConfig,
    'class': classConfig,
    'viewBox': '-1 -2 26 26',
  }
}
let iconLocationMark = {
  'units': [
    path.locationMarkBase,
    path.locationMarkCriclePieces,
  ],
  'attrs': {
    'fill': fillConfig,
    'class': classConfig,
    'viewBox': '0 -10 530 530',
  }
}

/* icon名稱 - 使用於html elemenet class name */
/*
  <i class="icon-search"></i>
*/
iconName['icon-clipboard-check'] = iconCalculatorCheck   //RW優化標記: 可自行轉換under_dash和駝峰式命名
iconName['icon-search']     = iconSearch
iconName['icon-card-list']  = iconCardList
iconName['icon-gear-fill']  = iconGearFill
iconName['icon-calculator'] = iconCalculator
iconName['icon-calculator-sleek'] = iconCalculatorSleek
iconName['icon-dialogue'] = iconDialogue
iconName['icon-location-mark'] = iconLocationMark

export default {
  iconName,
}