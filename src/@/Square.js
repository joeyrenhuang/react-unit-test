import React from 'react'
export default function Square(props) {
  return pug`
    .square
      = props.children
  `
}

