import React, { Fragment } from 'react';
import Header from './layout/Header'
import Content from './layout/Content'
import Footer from './layout/Footer'

export default () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  )
}
