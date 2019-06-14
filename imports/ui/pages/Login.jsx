import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let username = e.target.username.value.trim();
    let password = e.target.password.value.trim();
    Meteor.loginWithPassword({ username }, password, (err) => {
      if (err) {
        this.setState({ error: 'Invalid username and password' });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  render() {
    return (
      <div>
        <Container maxWidth="md">
          <Grid container
            alignItems='center'
            justify='center'
            direction='column'
          >
            <h1>Login</h1>
            <form onSubmit={this.onSubmit}>
              <Grid item>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input type="username" placeholder="username" name="username" />
                  </FormControl>
                </FormGroup>
              </Grid>

              <Grid item>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input type="password" placeholder="password" name="password" />
                  </FormControl>
                </FormGroup>
              </Grid>

              <Grid item>
                <FormGroup>
                  <Button variant="contained" type="submit" color="primary">Login</Button>
                </FormGroup>
              </Grid>
            </form>
            <div>
              <Link to="/signup">Create an account</Link>
            </div>
          </Grid>
        </Container>
      </div>
    );
  }
}