import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => (
    {
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: 16,
            marginRight: 16,
            width: 200,
        },
    }
));

export default () => {
    const classes = useStyles();
    const [origin, setOrigin] = React.useState("");
    const [destination, setDestination] = React.useState("");
    const [departureDate, setDepartureDate] = React.useState("");

    return (
        <form className={classes.container} noValidate autoComplete="off">
            <Grid xs={12}>
                <TextField
                    id="origin"
                    label="Origin"
                    className={classes.textField}
                    value={origin}
                    onChange={e => setOrigin(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="destination"
                    label="Destination"
                    className={classes.textField}
                    value={destination}
                    onChange={e => setDestination(e.target.value)}
                    margin="normal"
                    variant="outlined"
                />
            </Grid>
            <Grid xs={12}>
                <TextField
                    id="departure"
                    label="Departure"
                    type="date"
                    className={classes.textField}
                    value={departureDate}
                    onChange={e => setDepartureDate(e.target.value)}
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                />
            </Grid>
        </form>
    );
}
