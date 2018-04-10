import React, { Fragment } from 'react';
import {
  Header,
  Segment,
  List,
} from 'semantic-ui-react';

const Lifecycle = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Header as="h5" style={{ fontSize: '2em' }}>Moar</Header>
      <List bulleted>
        <List.Item>Styling (CSS)</List.Item>
        <List.Item>Normalizr</List.Item>
        <List.Item>Side Effects</List.Item>

        <List.Item>Immutability</List.Item>
        <List.Item>Test y Snapshot</List.Item>
      </List>
      <p style={{ fontSize: '1.20em' }}>
        Veamos codigo
      </p>
    </Segment>
  </Fragment>
);

export default Lifecycle;
