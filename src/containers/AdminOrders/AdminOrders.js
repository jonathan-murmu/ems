import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

class Home extends Component {
    render () {
        return (
            <Typography component="h2" variant="h1" gutterBottom>
                Admin Orders
            </Typography>
        );
        
    }
};

export default Home;