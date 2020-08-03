import React from 'react'
import Button from '@material-ui/core/Button/index'
import { Link } from 'react-router-dom'

import { Grid, makeStyles } from '@material-ui/core/index'

const useStyles = makeStyles({
    body: {
        marginTop: '5vh'
    },
    f2lLogo: {
        height: 38,
        marginBottom: '8vh'
    },
    errorMessage: {
        marginBottom: '2vh'
    },
    backButton: {
        marginTop: '8vh'
    }
})

const LoginError = props => {
    const classes = useStyles()

    return (
        <Grid className={classes.body} justify='center'>
            <img className={classes.f2lLogo} src='/assets/pictures/logo.png' />
            <h1 className={classes.errorMessage}>Der opstod en uventet fejl. Prøv venligst igen.</h1>
            <h1>Kontakt venligst Acto.dk i tilfælde af fejlen opstår igen.</h1>
            <Button className={classes.backButton} color='primary' variant='contained' component={Link} to='/login'>
                Gå til login
            </Button>
        </Grid>
    )
}

export default LoginError
