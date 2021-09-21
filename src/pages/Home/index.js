import LazyLoad from '../../components/LazyLoad'

// eslint-disable-next-line react/display-name
export default props => <LazyLoad component={import('./Home.js')} {...props} />
