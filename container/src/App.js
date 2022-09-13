import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

export default () => {

  return (

    <div>
      <StylesProvider >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={()=><div>main</div>} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}