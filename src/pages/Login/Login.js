import { Card, CardContent, styled, Typography } from '@mui/material'

import LoginButton from './components/LoginButton'

const LoginCard = styled(Card)(({ theme }) => {
    return ({
        width: 400,
        margin: 'auto',
        textAlign: 'center',
        marginTop: theme.spacing(5)
    })
})

function Login () {
    return (
        <LoginCard>
            <CardContent>
                <Typography variant='h4' gutterBottom>
                    XYZ System titel
                </Typography>
                <Typography variant='h6'>
                    Log ind
                </Typography>
                <LoginButton url='/google' text='Login med Google' />
                <form>
                    <a href='https://www.acto.dk/kontakt/'>Problemer? - Kontakt os</a>
                </form>
            </CardContent>
        </LoginCard>
    )
}

export default Login
