import React from 'react';
import MaterialCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  card: {
    margin: theme.spacing(1),
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'


  }
}));

const Card = props => {
  const classes = useStyles();

  return(
    <MaterialCard className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h3">
          {props.user.name ? props.user.name : props.user.login}
        </Typography>
        <Link href={`${props.user.html_url}`}>Github</Link>
      </CardContent>
    </MaterialCard>
  )
}

export default Card;