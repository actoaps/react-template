import React from 'react'
import ReactDom from 'react-dom'

import App from './App'

const render = Component => {
    ReactDom.render(
        <Component />,
        document.querySelector('#react-hook')
    )
}

render(App)
