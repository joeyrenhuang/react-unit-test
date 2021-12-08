import React from 'react'
import { render } from 'react-dom'
import { act } from 'react-dom/test-utils'
import { expect } from 'chai'
import App from '../src/App.js'
describe('#App', () => {
  it('App should contain word "Hanse"', () => {
    act(() => {
      render(<App />, div)
    })
    expect(document.body.innerHTML).to.have.string('Hanse')
  })
})

