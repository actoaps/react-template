import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

export default function LoginButton (props) {
    return (
        <Button color='primary' variant='contained' href={props.url}>
            {props.text}
        </Button>
    )
}

LoginButton.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
