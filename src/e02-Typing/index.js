import React, { Fragment } from 'react';
import {
  Header,
  Segment,
  List,
} from 'semantic-ui-react';

import { InlineCode } from '../components/CodeBlock';

const Lifecycle = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Header as="h5" style={{ fontSize: '2em' }}>Typing</Header>
      <List bulleted>
        <List.Item>
          <InlineCode>PropTypes</InlineCode>: API "nativa" de react.
          Hace checkeos en runtime. Es flexible pero un poco limitada
        </List.Item>
        <List.Item>
          <InlineCode>FlowType</InlineCode>: El amor de mi vida.
          Static Checking. Solo anotaciones.
        </List.Item>
        <List.Item>
          <InlineCode>TypeScript</InlineCode>: Superset the JS con types.
        </List.Item>
      </List>
      <p style={{ fontSize: '1.20em' }}>
        Veamos codigo
      </p>
    </Segment>
  </Fragment>
);

export default Lifecycle;
