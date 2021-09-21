import PropTypes from 'prop-types'
import { lazy, Suspense } from 'react'
import Loading from './Loading'

export default function LazyLoad ({ component, ...rest }) {
    const Component = lazy(() => component)

    return (
        <Suspense fallback={<Loading />}>
            <Component {...rest} />
        </Suspense>
    )
}

LazyLoad.propTypes = {
    component: PropTypes.object
}
