import React, { Component } from 'react';
import AddPrepTask from './AddPrepTask';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';

export default class PrepList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: [],
    }
  }

  render() {
    return (
      <Container >
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <h3>PrepList</h3>
          <AddPrepTask />
        </Grid>
      </Container>
    );
  }
}