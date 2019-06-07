import React from 'react'
import LazyLoad from '../../components/LazyLoad'

export default (props) => <LazyLoad component={import('./Home.js')} {...props} />
