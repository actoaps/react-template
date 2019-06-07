import React from 'react'
import PropTypes from 'prop-types'

// UI
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'

const styles = {
    row: {
        width: '100%',
        height: 'calc(100vh - 64px)'
    }
}

const Loading = ({ classes }) => (
    <Grid container justify='center' alignItems='center' className={classes.row}>
        <Grid item>
            <CircularProgress size={80} color='primary' />
        </Grid>
    </Grid>
)

Loading.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
