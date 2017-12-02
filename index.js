import isNil from "@unction/isnil"

export default function key (name: KeyType): UnaryFunctionType {
  return function keyProperty (keyedFunctor: mixed | void): ValueType {
    if (isNil(keyedFunctor)) {
      return keyedFunctor
    }

    if (keyedFunctor.get) {
      return keyedFunctor.get(name)
    }

    return keyedFunctor[name]
  }
}
