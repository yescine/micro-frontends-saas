import React from 'react'
import ReactDom from 'react-dom'

export const mount = (el) => {
  ReactDom.render(
    <h1>Marketing</h1>,
    el
  )
}
const isDev = process.env.NODE_ENV === "development"
if (isDev) {
  const devRoot = document.querySelector("#_marketing-dev-root")
  if (devRoot) mount(devRoot)
}