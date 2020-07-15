import checkType from './type.js'
import util from '../utils/index.js'
const isHTML = dom => dom instanceof HTMLElement

const getDom = dom => isHTML(dom) ? dom : window

const getElement = dom => isHTML(dom) ? dom : window.document.body

const getScrollTop = dom => {
  let bodyScrollTop = 0
  let documentScrollTop = 0
  document.body && (bodyScrollTop = document.body.scrollTop)
  isHTML(dom) && (bodyScrollTop = dom.scrollTop)
  document.documentElement && (documentScrollTop = document.documentElement.scrollTop)
  return Math.max(bodyScrollTop, documentScrollTop)
}

const getScrollHeight = dom => {
  let bodyScrollHeight = 0
  let documentScrollHeight = 0
  document.body && (bodyScrollHeight = document.body.scrollHeight)
  isHTML(dom) && (bodyScrollHeight = dom.scrollHeight)
  document.documentElement && (documentScrollHeight = document.documentElement.scrollHeight)
  return Math.max(bodyScrollHeight, documentScrollHeight)
}

const getWindowHeight = dom => {
  if (isHTML(dom)) { return dom.offsetHeight }
  if (document.compatMode === 'CSS1Compat') { return document.documentElement.clientHeight }
  return document.body.clientHeight
}

const isScrollTop = (dom = window) => getScrollTop(dom) <= 0

const isScrollBottom = (dom = window, limit = 0.1) => {
  const res = getScrollTop(dom) + getWindowHeight(dom) - getScrollHeight(dom)
  return res >= 0 && res <= limit
}

const doScroll = (dom, top = 0) => {
  getDom(dom).scrollTo({ top, left: 0, behavior: 'smooth' })
  return getScrollTop(dom)
}

const scroll2Top = (dom = window) => doScroll(dom, 0)

const scroll2Bottom = (dom = window) => doScroll(dom, getScrollHeight(dom))

const scrollTopByStep = (step, dom = window) => {
  const scrollTopNum = getScrollTop(dom)
  if (scrollTopNum > 0) {
    const scrollStep = scrollTopNum - (step || 0)
    return doScroll(dom, scrollStep)
  }
  return scrollTopNum
}

const scrollBottomByStep = (step, dom = window) => {
  const scrollTopNum = getScrollTop(dom)
  if (isScrollBottom(dom, 0)) { return scrollTopNum }
  const scrollStep = scrollTopNum + (step || 0)
  return doScroll(dom, scrollStep)
}

const toFullScreen = (dom) => {
  const elem = isHTML(dom) ? dom : document.body
  if (elem.webkitRequestFullScreen) { return elem.webkitRequestFullScreen() || true }
  if (elem.mozRequestFullScreen) { return elem.mozRequestFullScreen() || true }
  if (elem.msRequestFullscreen) { return elem.msRequestFullscreen() || true }
  if (elem.requestFullScreen) { return elem.requestFullScreen() || true }
  return false
}

const exitFullScreen = () => {
  const elem = parent.document
  if (elem.webkitCancelFullScreen) { return elem.webkitCancelFullScreen() || true }
  if (elem.mozCancelFullScreen) { return elem.mozCancelFullScreen() || true }
  if (elem.cancelFullScreen) { return elem.cancelFullScreen() || true }
  if (elem.msExitFullscreen) { return elem.msExitFullscreen() || true }
  if (elem.exitFullscreen) { return elem.exitFullscreen() || true }
  return false
}

const print = option => {
  if (!checkType.isObject(option)) { throw new TypeError('option 类型错误') }
  const defaultOption = {
    width: 1000,
    height: 900,
    printClass: 'print',
    noPrintClass: 'no-print',
    closeWindow: false,
    delay: 200
  }
  const opts = util.assign(defaultOption, option)
  // 打开一个新窗口
  const myWindow = window.open(' ', '', `width=${opts.width},height=${opts.height},scrollbars=yes`)

  let bodyHtml = ''

  const M = fn => {
    const inputElementsTag = ['input', 'textarea']
    inputElementsTag.forEach(tagName => {
      const inputElement = document.querySelectorAll(`.${opts.printClass} ${tagName}`)
      for (let i = 0; i < inputElement.length; i++) {
        fn(inputElement[i], tagName)
      }
    })
  }

  M((item, tagName) => {
    item.setAttribute(item.hasAttribute('disabled') ? 'is-disabled' : 'disabled', true)
    if (tagName === 'textarea') {
      item.innerHTML = item.value
    } else {
      item.setAttribute('value', item.value)
    }
  })

  const printElements = window.document.getElementsByClassName(opts.printClass)
  for (let i = 0; i < printElements.length; i++) {
    bodyHtml += printElements[i].innerHTML
  }

  M(item => { if (!item.hasAttribute('is-disabled')) item.removeAttribute('disabled') })

  // 获取head标签内的html
  let headHtml = document.head.innerHTML + `<style>.${opts.noPrintClass}{display: none !important;}</style>`

  // 头中的screen换成打印样式print
  headHtml = headHtml.replace('screen', 'screen, print')

  // 删除头中的 script 标签
  headHtml = headHtml.replace(/<script.*?<\/script>/g, '')

  // 重新写入文档流
  myWindow.document.write('<html>')
  myWindow.document.write(headHtml)
  myWindow.document.write('<body>')
  myWindow.document.write(bodyHtml.replace(/,/g, '').replace(/null/g, ''))
  myWindow.document.write(`<script>setTimeout(function() {window.print();${opts.closeWindow && 'window.close()'}}, ${opts.delay})</`)
  myWindow.document.write('script>')
  myWindow.document.write('</body></html>')
}

const createElement = str => {
  const el = document.createElement('div')
  el.innerHTML = str
  return el.firstElementChild
}

const doCopy = str => {
  const el = createElement(`<textarea readonly value="${str}" style="position: absolute;left: -9999px;">${str}</textarea>`)
  document.body.appendChild(el)
  const selected =
      document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

const copyToClipboard = str => {
  const result = {
    then: fn => {
      if (checkType.isFunction(fn)) fn(str)
      return result
    },
    catch: fn => {}
  }
  try {
    doCopy(str)
  } catch (err) {
    result.then = fn => result
    result.catch = fn => checkType.isFunction(fn) && fn(err)
  }
  return result
}

let scrollTop = 0

const preventScroll = () => {
  if (document.body.dataset.preventScroll === 'true') return false

  scrollTop = getScrollTop()

  document.body.style['overflow-y'] = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.width = '100%'
  document.body.style.top = -scrollTop + 'px'

  document.body.dataset.preventScroll = true
  return scrollTop
}

const recoverScroll = () => {
  if (document.body.dataset.preventScroll === 'true') {
    document.body.dataset.preventScroll = false
    document.body.style['overflow-y'] = 'auto'
    document.body.style.position = 'static'

    window.scrollTo(0, scrollTop)
    return scrollTop
  }
  return false
}

const getSelectText = () => document.Selection ? document.selection.createRange().text : window.getSelection().toString()

const disableSelect = (dom = window.document.body) => (getElement(dom).onselectstart = () => false)

const recoverSelect = (dom = window.document.body) => (getElement(dom).onselectstart = () => true)

const disableContextMenu = (dom = window.document.body) => (getElement(dom.oncontextmenu = () => false))

const disableCopy = (dom = window.document.body) => (getElement(dom).oncopy = () => false)

const replaceCopy = (str, dom = window.document.body) => {
  copyToClipboard(getSelectText() + '\n' + str)
  disableCopy(dom)
}

export default {
  scroll2Top,
  scroll2Bottom,
  isScrollTop,
  isScrollBottom,
  scrollTopByStep,
  scrollBottomByStep,
  toFullScreen,
  exitFullScreen,
  print,
  createElement,
  copyToClipboard,
  preventScroll,
  recoverScroll,
  disableSelect,
  recoverSelect,
  disableContextMenu,
  disableCopy,
  getSelectText,
  replaceCopy
}
