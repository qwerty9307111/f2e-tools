const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args)

const flow = funcs => {
  const length = funcs.length
  let index = length
  while (index--) {
    if (typeof funcs[index] !== 'function') {
      throw new TypeError('Expected a function')
    }
  }
  return (...args) => {
    let idx = 0
    var result = length ? funcs[idx].apply(this, args) : args[0]
    while (++idx < length) {
      result = funcs[idx].call(this, result)
    }
    return result
  }
}

const assign = (o, n) => {
  const t = JSON.parse(JSON.stringify(o))
  for (var p in n) {
    // eslint-disable-next-line no-prototype-builtins
    if (n.hasOwnProperty(p) && (!o.hasOwnProperty(p))) { t[p] = n[p] }
  }
  return t
}

export default {
  curry,
  flow,
  assign
}
