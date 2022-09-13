import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
export const mount = (el) => {
  ReactDom.render(<App />,
    el
  )
}
const isDev = process.env.NODE_ENV === "development"
if (isDev) {
  const devRoot = document.querySelector("#_marketing-dev-root")
  if (devRoot) mount(devRoot)
}