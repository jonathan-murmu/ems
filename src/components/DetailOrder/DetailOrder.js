import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const detailOrder = ( props ) => {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        // <div>{props.rowData.orderId} xy</div>
        <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.rowData.orderId}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {props.rowData.venue}
                </Typography>
                <Typography component="p">
                    {props.rowData.name}
                    <br />
                    {props.rowData.date}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}
detailOrder.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(detailOrder);
