import React, { Fragment } from 'react';
import FlightSearch from './components/FlightSearch'
import Header from './components/Header'
import { CssBaseline } from '@material-ui/core';

export default () => {
  return (
    <Fragment>
      <CssBaseline />
      <Header />
      <div style={{ paddingTop: 60 }}>
        <FlightSearch />
      </div>
    </Fragment>
  )
}
