import React, { Component } from 'react';
import './App.css';
import { Header, Container, Segment, Grid, Input, Button } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Segment textAlign='center'>
          <Grid centered padded>
            <Grid.Row>
              <Header  as='h1' icon='plug' content='Query Browser' />
            </Grid.Row>
            <Grid.Row>
              <Input 
                size='massive'
                label={<Button>RUN QUERY</Button>}
                labelPosition='right'
                placeholder='SQL QUERY' 
              />
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default App;
