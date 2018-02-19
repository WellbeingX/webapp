import React from 'react'
import { Container, Button, Grid, Header, List, Segment } from 'semantic-ui-react'
import { Route, Link } from 'react-router-dom'


const HeaderUs = () => (

    <Container>
      <Grid style={{paddingTop:10}}>
          <Grid.Column floated='left' width={5}>
            <h3>Nourish.Life</h3>
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Link to="/">Home</Link>
            <Link to="/about-us">About </Link>
          </Grid.Column>
      </Grid>
    </Container>
)

export default HeaderUs
