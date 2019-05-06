import React, { Component } from 'react';
import { connect } from 'react-redux';

import MaterialTable from 'material-table'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as adminOrdersAction from '../../store/actions/index';  // index can be omitted 
import DetailOrder from '../../components/DetailOrder/DetailOrder';
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
            console.log(orderData)
        }
        
        return (
            <div style={{ maxWidth: '100%' }}>
                <MaterialTable
                    columns={[
                        { title: 'Order ID', field: 'orderId' },
                        { title: 'Name', field: 'name' },
                        { title: 'Venue', field: 'venue' },
                        { title: 'Date', field: 'date', },
                    ]}
                    data={orderData}
                    title="Orders"
                    detailPanel={rowData => {
                        return (
                            <DetailOrder rowData={rowData} />
                        )
                    }}
                    />
            </div>
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
