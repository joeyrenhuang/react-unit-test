import React from 'react'
import Footer from './@/Footer'
import Square from './@/Square'
import { Form, Input, Button } from 'antd'
const Item = Form.Item
function Squares(props) {
  return pug`
  .squares
    Form
      Item(label="name")
        Input
      Item(label="from")
        Input
      Item(label="gender")
        Input
      Item
        Button(htmlFor="submit" type="primary") submit
    Square
      Button(type="primary") Primary Button
    .square (1)
    each item, index in Array(props.x).fill(0)
      Square(key=index) #{index + 1}
    = props.children
  `
}
export default function App() {
  return pug`
    #app.t_c
      header
        span Reat Unit Test #{localStorage.getItem('skin')}
      section.content
        Square
          Squares(x=5)
            Squares(x=20)
            Square
              Square
            Squares(x=30)
      Footer
  `
}
