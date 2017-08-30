/* eslint-disable no-undefined */
import type from "@unction/type"

export default function key (name: KeyType): Function {
  return function keyProperty (keyedFunctor: mixed): ValueType {
    switch (type(keyedFunctor)) {
      case "String": {
        return keyedFunctor[name]
      }
      case "Object": {
        return keyedFunctor[name]
      }
      case "Array": {
        return keyedFunctor[name]
      }
      case "Map": {
        if (keyedFunctor.has(name)) {
          return keyedFunctor.get(name)
        }

        return undefined
      }
      default: {
        return undefined
      }
    }
  }
}
