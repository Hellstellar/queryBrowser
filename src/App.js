import React, { Component } from 'react';
import './App.css';
import QueryForm from './components/QueryForm'
import QueryResult from './components/QueryResult'
import SortOptions from './components/SortOptions'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { twilight } from 'react-syntax-highlighter/styles/prism'
import { Header, Container, Segment, Grid } from 'semantic-ui-react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      query: '',
      users: [],
      sortOption: ''
    }
  }


  //EVENTS
  onSubmit = (event) => {
    fetch('http://localhost:3050/getdata',{
      method: 'post',
      headers: { 'content-type': 'application/json'},
      body: JSON.stringify({ query: this.state.query })
    }).then( res => res.json())
      .then(data => { 
        this.setState({ users: data }) 
      })
      .catch(err => console.log(err))
  }

  onSort = (event, {value}) => {
    let query = this.state.query;
    query = query.replace(` ORDER BY ${this.state.sortOption}`, '')
    query += ` ORDER BY ${value}`
    this.setState({ query, sortOption: value })
  }

  queryChange = (event) => {
    this.setState({ query: event.target.value })
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
              <Grid.Column width = {12}>
                <QueryForm queryChange={this.queryChange} query={this.state.query} onSubmit = {this.onSubmit}/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width = {7}>
                <SyntaxHighlighter language='sql' style={twilight}>
                  {this.state.query}
                </SyntaxHighlighter>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <SortOptions onSort = {this.onSort} />
            </Grid.Row>
            <Grid.Row>
              <QueryResult users = { this.state.users }/>
            </Grid.Row>
          </Grid>
        </Segment>
      </Container>
    )
  }
}

export default App;
