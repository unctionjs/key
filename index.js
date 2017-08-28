/* eslint-disable no-undefined */
import isIterable from "@unction/isfunctor"

export default function key (name: KeyType): Function {
  return function keyProperty (functor: FunctorType): ValueType {
    if (isIterable(functor)) {
      return functor[name]
    }

    return undefined
  }
}
