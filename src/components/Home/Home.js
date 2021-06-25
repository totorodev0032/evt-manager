import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const Home = ({ history }) => {
  return (
    <>
      <Segment inverted textAlign="center" vertical className="masthead">
        <Container>
          <Header as="h1" inverted>
            Re-vents
          </Header>
          <Button onClick={() => history.push('/events')} size="huge" inverted>
            Get Started
            <Icon name="right arrow" inverted />
          </Button>
        </Container>
      </Segment>
    </>
  );
};

export default Home;
