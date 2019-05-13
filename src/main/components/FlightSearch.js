import React from 'react';
import { Grid, TextField, Tabs, Tab } from '@material-ui/core';

const SearchType = Object.freeze({
    ONE_WAY: 0,
    RETURN: 1,
});

export default () => {
    const [searchType, setSearchType] = React.useState(SearchType.ONE_WAY);
    const [origin, setOrigin] = React.useState("");
    const [destination, setDestination] = React.useState("");
    const [departure, setDeparture] = React.useState("");
    const [arrival, setArrival] = React.useState("");
    const handleChange = (event, value) => {
        setSearchType(value);
    }
    const handleTextChange = setState => event => {
        setState(event.target.value);
    }
    return (
        <Grid>
            <Tabs value={searchType} onChange={(handleChange)}>
                <Tab label="Oneway" />
                <Tab label="Return" />
            </Tabs>
            <TextField
                label="Origin"
                fullWidth
                margin="normal"
                value={origin}
                onChange={handleTextChange(setOrigin)}
                variant="outlined"
                style={{ margin: 8 }}
                InputLabelProps={{ shrink: true }}
            />
            <TextField
                label="Destination"
                fullWidth
                margin="normal"
                value={destination}
                onChange={handleTextChange(setDestination)}
                variant="outlined"
                style={{ margin: 8 }}
                InputLabelProps={{ shrink: true }}
            />
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        label="Departure"
                        fullWidth
                        margin="normal"
                        type="date"
                        value={departure}
                        onChange={handleTextChange(setDeparture)}
                        variant="outlined"
                        style={{ margin: 8 }}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                {searchType === SearchType.RETURN
                    &&
                    <Grid item xs={6}>
                        <TextField
                            label="Arrival"
                            fullWidth
                            margin="normal"
                            type="date"
                            value={arrival}
                            onChange={handleTextChange(setArrival)}
                            variant="outlined"
                            style={{ margin: 8 }}
                            InputLabelProps={{ shrink: true }}
                        />
                    </Grid>}
            </Grid>
        </Grid>
    )
}
