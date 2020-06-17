const isHTML = dom => dom instanceof HTMLElement

const getDom = dom => isHTML(dom) ? dom : window

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

const isScrollTop = dom => getScrollTop(dom) <= 0

const isScrollBottom = (dom, limit = 0.1) => {
  const res = getScrollTop(dom) + getWindowHeight(dom) - getScrollHeight(dom)
  return res >= 0 && res <= limit
}

const doScroll = (dom, top = 0) => {
  getDom(dom).scrollTo({ top, left: 0, behavior: 'smooth' })
  return getScrollTop(dom)
}

const scroll2Top = dom => doScroll(dom, 0)

const scroll2Bottom = dom => doScroll(dom, getScrollHeight(dom))

const scrollTopByStep = (step, dom) => {
  const scrollTopNum = getScrollTop(dom)
  if (scrollTopNum > 0) {
    const scrollStep = scrollTopNum - (step || 0)
    return doScroll(dom, scrollStep)
  }
  return scrollTopNum
}

const scrollBottomByStep = (step, dom) => {
  const scrollTopNum = getScrollTop(dom)
  if (isScrollBottom(dom, 0)) { return scrollTopNum }
  const scrollStep = scrollTopNum + (step || 0)
  return doScroll(dom, scrollStep)
}

const toFullScreen = () => {
  const elem = document.body
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

module.exports = {
  scroll2Top,
  scroll2Bottom,
  isScrollTop,
  isScrollBottom,
  scrollTopByStep,
  scrollBottomByStep,
  toFullScreen,
  exitFullScreen
}
