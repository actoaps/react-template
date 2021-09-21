import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

import { Box, Typography } from '@mui/material'

function LoginError (props) {
    return (
        <Box mt={1} textAlign='center'>
            <Typography variant='h6'>Der opstod en uventet fejl. Prøv venligst igen.</Typography>
            <Typography variant='h6'>Kontakt venligst Acto.dk i tilfælde af fejlen opstår igen.</Typography>
            <Button color='primary' variant='contained' component={Link} to='/login'>
                Gå til login
            </Button>
        </Box>
    )
}

export default LoginError
