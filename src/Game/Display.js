import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '80px',
    height: '80px',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  div: {
      width: '400px',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '20px'
  }
});

const Display = ({ numbers }) => {
    let i = 0;
    const classes = useStyles();

    return (
        <div className={classes.div}>
            { numbers.map(el => 
                <Card className={classes.root} key={i++}>
                    <CardContent>
                        <Typography variant="h5" component="h2">{el}</Typography>
                    </CardContent>
                </Card> 
            )}
        </div>
    )
}

export default Display;