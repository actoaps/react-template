import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

// Login buttons
import LoginButton from './components/LoginButton'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
    },
    button: {
        margin: 10
    }
}))

function Login () {
    const classes = useStyles()

    return (
        <>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='h4' gutterBottom>
                        XYZ System titel
                    </Typography>
                    <Typography variant='h6'>
                        Log ind
                    </Typography>
                    <LoginButton className={classes.button} url='/google' text='Login med Google' />
                    <LoginButton className={classes.button} url='/economic' text='Login med Economic' />
                    <form>
                        <a href='https://www.acto.dk/kontakt/'>Problemer? - Kontakt os</a>
                    </form>
                </Paper>
            </main>
        </>
    )
}

export default Login
