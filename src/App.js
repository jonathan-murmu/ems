import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AdminDashboard from './containers/AdminDashboard/AdminDashboard';
import AdminOrders from './containers/AdminOrders/AdminOrders'
import AdminOrder from './components/Order/Order';
import Layout from './hoc/Layout/Layout';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route exact path='/admin/dashboard' component={AdminDashboard}/>
        <Route path="/admin/orders/:id" component={AdminOrder} />
        <Route path="/admin/orders" component={AdminOrders} />
        <Redirect to="/admin/dashboard" />
      </Switch>
    );
    return (
      <Layout>
        {routes}
      </Layout>
    );
  }
}

export default App;
