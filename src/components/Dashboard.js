import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import ThresholdTest from './ThresholdTest';
import AreaTest from './StockTest';
import PieTest from './PieTest';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container className={styles.root} spacing={8}>
        <Grid item xs={12}>
          <Grid container className={styles.demo} justify="center" spacing={8} style={{padding:10}} >
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs={4}>
                <Paper className={styles.paper} style={{padding:10}} elevation={5}>
                  <ThresholdTest width="400" height="180" margin={{ left: 5, right: 5, top: 5, bottom: 5 }} />
                  <Typography variant="h5" component="h3">
                    Some data
                  </Typography>
                  <Typography component="p">
                    Just some example test data
                  </Typography>
                </Paper>
              </Grid>
            ))}
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs={4}>
                <Paper className={styles.paper} style={{padding:10}} elevation={5}>
                  <AreaTest width="400" height="180" margin={{ left: 5, right: 5, top: 5, bottom: 5 }} />
                  <Typography variant="h5" component="h3">
                    Some data
                  </Typography>
                  <Typography component="p">
                    Just some example test data
                  </Typography>
                </Paper>
              </Grid>
            ))}
            {[0, 1, 2].map(value => (
              <Grid key={value} item xs={4}>
                <Paper className={styles.paper} style={{padding:10}} elevation={5}>
                  <PieTest width="400" height="180" margin={{ left: 5, right: 5, top: 5, bottom: 5 }} />
                  <Typography variant="h5" component="h3">
                    Some data
                  </Typography>
                  <Typography component="p">
                    Just some example test data
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    padding: 10,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});
