import React, { Fragment } from 'react';
import { Segment, Header } from 'semantic-ui-react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { monokai } from 'react-syntax-highlighter/styles/prism';

import './CodeBlock.css';

export const InlineCode = ({ children }) => (
  <code className="inline-code">{children}</code>
);

export const Code = ({ code }) => (
  <SyntaxHighlighter language="javascript" style={monokai}>
    {code}
  </SyntaxHighlighter>
);

export const CodeBlock = ({ title, children, code }) => (
  <Segment.Group stacked>
    {title && (
      <Segment>
        <Header size="large">{title}</Header>
      </Segment>
    )}
    <Segment>
      <Code code={code} />
    </Segment>
    {children && (
      <Fragment>
        <Segment>
          <Header as="h5">Result:</Header>
        </Segment>
        <Segment>
          {children}
        </Segment>
      </Fragment>
    )}
  </Segment.Group>
);
