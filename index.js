/* eslint-disable no-undefined */
import type from "@unction/type"

export default function key (name: any): Function {
  return function keyProperty (functor: any): ValueType {
    switch (type(functor)) {
      case "String": {
        return functor[name]
      }
      case "Object": {
        return functor[name]
      }
      case "Array": {
        return functor[name]
      }
      case "Map": {
        return functor.get(name)
      }
      case "WeakMap": {
        return functor.get(name)
      }
      default: {
        return undefined
      }
    }
  }
}
