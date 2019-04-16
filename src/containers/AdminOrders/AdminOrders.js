import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as adminOrdersAction from '../../store/actions/index';  // index can be omitted 
import axios from '../../axios_admin';


class AdminOrders extends Component {
    state = {
        'orders': [
            {'orderId': '1abc'},
            {'orderId': '2abc'}
        ]
    }
    componentDidMount () {
        this.props.getOrders();
    }
    render () {
        if ( this.props.orders ) {
            console.log(this.props.orders);
        }
        return (
            <Typography component="h4" variant="h4" gutterBottom>
                Admin Orders
            </Typography>
        );
        
    }
};
const mapStateToProps = state => {
    return {
        orders: state.adminOrders.orders,
        error: state.adminOrders.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(adminOrdersAction.getOrders())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(AdminOrders, axios));
// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Photogrid, axios));
