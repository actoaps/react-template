import { Grid, CircularProgress } from '@mui/material'

function Loading () {
    return (
        <Grid container justify='center' alignItems='center' height='100%' width='100%'>
            <Grid item>
                <CircularProgress size={80} color='primary' />
            </Grid>
        </Grid>
    )
}

export default Loading
