import React from 'react';
import { NavLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';

import Aux from '../../../hoc/Aux/Aux';

const navItems = (props) => {
    return (
        <Aux>
            <Divider />
            <List>
                {['dashboard', 'orders', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem button key={text} component={NavLink} to={"/admin/"+text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()} />
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </Aux>
    )
}

export default navItems;