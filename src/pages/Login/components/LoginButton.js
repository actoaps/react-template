import PropTypes from 'prop-types'
import React from 'react'
import Button from '@material-ui/core/Button'

export default function LoginButton (props) {
    return (
        <Button color='primary' variant='contained' href={props.url} className={props.className}>
            {props.text}
        </Button>
    )
}

LoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    className: PropTypes.string
}
