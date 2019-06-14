import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();
    let newUser = {
      email: e.target.email.value.trim(),
      username: e.target.username.value.trim(),
      password: e.target.password.value.trim()
    }

    Accounts.createUser({ ...newUser }), (err) => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    }
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
            <h1>Register Here</h1>
            {this.state.error ? <p>{this.state.error}</p> : undefined}
            <form onSubmit={this.onSubmit}>
              <Grid item>
                <FormGroup>
                  <FormControl>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input type="email" placeholder="Email Address" name="email" />
                  </FormControl>
                </FormGroup>
              </Grid>

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
                  <Button variant="contained" type="submit" color="primary">Register</Button>
                </FormGroup>
              </Grid>
            </form>
            <div>
              <Link to="/">Already have an account?</Link>
            </div>
          </Grid>
        </Container>
      </div>
    );
  }
}