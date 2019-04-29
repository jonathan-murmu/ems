import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as adminOrdersAction from '../../store/actions/index';  // index can be omitted 
import axios from '../../axios_admin';
import Aux from '../../hoc/Aux/Aux';


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
        let orderData = [];
        if ( this.props.orders ) {
            orderData = this.props.orders.orders;
        }
        
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <MaterialTable
                        columns={[
                            { title: 'Order ID', field: 'orderId' },
                            { title: 'Name', field: 'name' },
                            { title: 'Venue', field: 'venue' },
                            { title: 'Date', field: 'date', },
                        ]}
                        data={orderData}
                        title="Orders"
                        />
                </Grid>
            </Grid>
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
