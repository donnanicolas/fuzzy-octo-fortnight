import React, { Fragment } from 'react';
import { Button } from 'semantic-ui-react';

import { CodeBlock } from '../components/CodeBlock';

const withJSXCode = '<div className="div">Hello</div>';
const WithJSX = () => (
  <div className="div">Hello</div>
);

const babelLink = 'https://babeljs.io/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=MYewdgzgLgBAgjAvDAFABwE4jRAlEgPhgG8AoGGDAUygFcMxVyKYAeAEwEsA3GYAGwCGECADlBAWyqIARBMGcwMgsxYlM2CADowkqjABkB1SwCQrNCrVrTACSr9-IdVhw69AXwCEXkxXMA9JZ-MB4mrAFc3FYwuADcpB4JpKCQsABCSKj4iERklDT0jCiqrAi6UrKinKBCEDIwAVbxiaQp4NAwAKoQVBhZ6K54hEwUHDwxY5bEGm4VVB4RwWozQ1qCAOb6RmzTs9qbC0sEYSv7Wltg1EiIyADkALJ3MAD8uwQPggDWVMcwAFzvABiVHk_F-QROzAiURUuDaqU6AGEQE4MBABvscnlmIjYLUQOisgBtO7Udh3AA0MDuAE8HE4AO5UmmMgAWnCgVDuAF0EhRqHQGKMWONoiFiAT0Vp5GgUFLCCEpgRVpp3FJFpCQrhTqLIhNmPCPEA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&lineWrap=false&presets=es2015%2Creact%2Cstage-2&prettier=true&targets=&version=6.26.0&envVersion=';

const WithoutJSXCode = "React.createElement('div', { className: 'div' }, 'Hello');";
const WithoutJSX = () => React.createElement('div', { className: 'div' }, 'Hello');

const conditionalRendering = `const User = (props) => (
  <div>
    <p>{props.name}</p>
    {props.age && <p>{props.age}</p>}
    {props.genre === 'M' ? <p>Make</p> : <p>Female</p>}
  </div>
)`;

const arrayRendering = `const Colors = (props) => {
  const colors = ['red', 'yellow', 'white'];
  return (
    <div>
      {colors.map(color =>
        <p>{props.name}</p>
      )}
    </div>
  )
}`;


const JSX = () => (
  <Fragment>
    <CodeBlock title="WithJSX" code={withJSXCode} >
      <WithJSX />
    </CodeBlock>
    <CodeBlock title="WithoutJSX" code={WithoutJSXCode} >
      <WithoutJSX />
    </CodeBlock>
    <Button as="a" size="large" target="_blank" href={babelLink}>Ver Babel</Button>
    <CodeBlock title="Conditional Rendering" code={conditionalRendering} />
    <CodeBlock title="Arrays" code={arrayRendering} />
  </Fragment>
);

export default JSX;
