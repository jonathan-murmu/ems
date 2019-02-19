import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <Typography component="h2" variant="h1" gutterBottom>
          h1. Heading
        </Typography>
      </Layout>
    );
  }
}

export default App;
