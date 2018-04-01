import React, { Fragment } from 'react';

import { CodeBlock } from '../components/CodeBlock';

const withJSXCode = '<div className="div">Hello</div>';
const WithJSX = () => (
  <div className="div">Hello</div>
);

const WithoutJSXCode = "React.createElement('div', { className: 'div' }, 'Hello');";
const WithoutJSX = () => React.createElement('div', { className: 'div' }, 'Hello');


const JSX = () => (
  <Fragment>
    <CodeBlock title="WithJSX" code={withJSXCode} >
      <WithJSX />
    </CodeBlock>
    <CodeBlock title="WithoutJSX" code={WithoutJSXCode} >
      <WithoutJSX />
    </CodeBlock>
  </Fragment>
);

export default JSX;
