import _ from 'lodash';
import React, { Component } from 'react';
import {
  Container, Dropdown, Header, Menu, Visibility, Grid,
  Segment,
} from 'semantic-ui-react';
import {
  Route,
  Link,
} from 'react-router-dom';

import Intro from './00-Intro';
import Basic from './01-Basic';
import Lifecycle from './02-Lifecycle';
import State from './03-State';
import Redux from './04-Redux';
import ReduxReact from './05-ReduxReact';

import JSX from './e01-JSX';
import Typing from './e02-Typing';
import Moar from './e03-Moar';

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};

class App extends Component {
  state = {
    menuFixed: false,
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state;

    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') });
  }

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  render() {
    const { menuFixed } = this.state;

    return (
      <div>
        <Container style={{ marginTop: '2em' }}>
          <Header as="h1">React</Header>
        </Container>
        <Visibility
          onBottomPassed={this.stickTopMenu}
          onBottomVisible={this.unStickTopMenu}
          once={false}
        >
          <Menu
            borderless
            fixed={menuFixed && 'top'}
            style={menuFixed ? fixedMenuStyle : menuStyle}
          >
            <Container>
              <Menu.Item as={Link} to="/">Intro</Menu.Item>
              <Menu.Item as={Link} to="/Basic">Basic</Menu.Item>
              <Menu.Item as={Link} to="/Lifecycle">Lifecycle</Menu.Item>
              <Menu.Item as={Link} to="/State">State</Menu.Item>
              <Menu.Item as={Link} to="/Redux">Redux</Menu.Item>
              <Menu.Item as={Link} to="/ReduxReact">ReduxReact</Menu.Item>

              <Menu.Menu position="right">
                <Dropdown text="Extra" pointing className="link item">
                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/JSX">JSX</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Typing">Typing</Dropdown.Item>
                    <Dropdown.Item as={Link} to="/Moar">Moar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Menu>
            </Container>
          </Menu>
        </Visibility>

        <Container text>
          <Route exact path="/" component={Intro} />
          <Route path="/Basic" component={Basic} />
          <Route path="/Lifecycle" component={Lifecycle} />
          <Route path="/State" component={State} />
          <Route path="/Redux" component={Redux} />
          <Route path="/ReduxReact" component={ReduxReact} />
          <Route path="/Typing" component={Typing} />
          <Route path="/JSX" component={JSX} />
          <Route path="/Moar" component={Moar} />
        </Container>
        <Segment inverted vertical style={{ padding: '5em 0em', marginTop: 20 }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header inverted as="h4" content="About" />
                  I'm Footer
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header inverted as="h4" content="Services" />
                  I fill space
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
