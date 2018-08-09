import React, { Component } from 'react';
import './App.css';
import QueryInput from './components/QueryInput'
import { Header, Container, Segment, Grid } from 'semantic-ui-react';

class App extends Component {

  queryChange = (event) => {
    console.log(event.target.value)
  }

  render() {
    return (
      <Container>
        <Segment textAlign='center'>
          <Grid centered padded>
            <Grid.Row>
              <Header  as='h1' icon='plug' content='Query Browser' />
            </Grid.Row>
            <Grid.Row>
              <QueryInput queryChange={this.queryChange} />
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default App;
