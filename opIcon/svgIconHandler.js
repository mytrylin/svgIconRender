/* 預設的svg tag 屬性設定 */
const xmlSpaceName = 'http://www.w3.org/2000/svg'
let svgFill = 'currentColor',
    svgClass = 'svg-icon-render',
    svgViewBox = '0 0 16 16';
let iconSVG = {
  xmlSpaceName,
  'tag': 'svg',
  'attrs': {
    'fill': svgFill,
    'class': svgClass,
    'viewBox': svgViewBox
  }
}

//RW優化標記: 提升客製化設計與修改的選擇，讓開發人員可以直接在專案頁面中，自由拼組icon，不必調整Lib
//針對不同icon name，可自訂SVG屬性

export default {
  iconSVG,   //預設的SVG
  xmlSpaceName,
}