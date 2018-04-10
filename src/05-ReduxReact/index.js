import React, { Fragment } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

import { Code } from '../components/CodeBlock';

const connect = `import * as actionCreators from './actionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state[, ownProps]) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

const ConnectedTodoApp connect(mapStateToProps, mapDispatchToProps)(TodoApp)

// In my App

const App = () => {
  return (
    <ConnectedTodoApp />
  )
}
`;

const provider = `
  const store = createStore(
    reducers,
    initialState,
    // enhancers,
  );

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , root);
`;


const Lifecycle = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Header as="h5" style={{ fontSize: '2em' }}>React + Redux</Header>
      <p style={{ fontSize: '1.20em' }}>
        A pesar de que Redux se puede usar solo, en general se utiliza junto con algo.
        En este caso React
      </p>
      <p style={{ fontSize: '1.20em' }}>
        Lo que hacemos es "mapear" partes del state a props y funciones que hacen
        dispatch a otras props
      </p>
      <Code code={connect} />
      <Code code={provider} />
      <Header as="h6" style={{ fontSize: '1.8em' }}>Containers</Header>
      <p style={{ fontSize: '1.20em' }}>
        Veamos el codigo, es mas lindo
      </p>
    </Segment>
  </Fragment>
);

export default Lifecycle;
