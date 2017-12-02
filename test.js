/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import key from "./index"

test("Object found key", ({same, end}) => {
  same(
    key("aaa")({aaa: "1"}),
    "1"
  )

  end()
})

test("Object missing key", ({same, end}) => {
  same(
    key("bbb")({aaa: "1"}),
    undefined
  )

  end()
})

test("undefined missing key", ({same, end}) => {
  same(
    key("bbb")(undefined),
    undefined
  )

  end()
})

test("Array missing key", ({same, end}) => {
  same(
    key(0)(["aaa"]),
    "aaa"
  )

  end()
})

test("String found key", ({same, end}) => {
  same(
    key(0)("abc"),
    "a"
  )

  end()
})

test("Map found key", ({same, end}) => {
  same(
    key("aaa")(new Map([["aaa", "aaa"]])),
    "aaa"
  )

  end()
})
