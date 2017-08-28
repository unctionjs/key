/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-undefined, no-magic-numbers */
import {test} from "tap"

import key from "./index"

test(({same, end}) => {
  same(
    key("aaa")({aaa: "1"}),
    "1"
  )

  end()
})

test(({same, end}) => {
  same(
    key("bbb")({aaa: "1"}),
    undefined
  )

  end()
})

test(({same, end}) => {
  same(
    key("bbb")(undefined),
    undefined
  )

  end()
})

test(({same, end}) => {
  same(
    key(0)(["aaa"]),
    "aaa"
  )

  end()
})

test(({same, end}) => {
  same(
    key(0)("abc"),
    "a"
  )

  end()
})

test(({same, end}) => {
  same(
    key("aaa")(new Map([["aaa", "aaa"]])),
    "aaa"
  )

  end()
})

test(({same, end}) => {
  const name = {}

  same(
    key(name)(new WeakMap([[name, "aaa"]])),
    "aaa"
  )

  end()
})
