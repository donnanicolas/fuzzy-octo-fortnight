import React, { Fragment } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

import { Code } from '../components/CodeBlock';

const stateCode = `setState(updater[, callback]);

this.setState((prevState, props) => {
  return {counter: prevState.counter + props.step};
});`;

const basicExample = `class Modal extends React.Component {
  state = {open: false};
  toggleModal() {
    this.setState(prevState => (
      {open: !prevState.open}
    ))
  }

  render() {
    const {open} = this.state;
    return (
      <div>
        <button onClick={this.toggleModal}>
          Toggle
        </button>
        {open && (
          <Modal
           //...
          />
        )}
      </div>
    )
  }
}`;

const sideEffectExample = `class Modal extends React.Component {
  state = {loading: true};

  componentDidMount() {
    fetch('/user')
      .then(user => {
        this.setState({loading: false, user});
      });
  }

  render() {
    const {user, loading} = this.state;
    return (
      <div>
        {loading
          ? <p>Loading...</p>
          : <p>{user.name}</p>
        }
      </div>
    )
  }
}`;

const Lifecycle = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Header as="h5" style={{ fontSize: '2em' }}>State</Header>
      <p style={{ fontSize: '1.20em' }}>
        En la mayoria de los casos podemos manejar la UI con datos provinientes de "afuera".
        Pero en algunos casos necesitamos setear la UI reaccionando a las acciones del usuario
        o eventos en el tiempo.
      </p>
      <p style={{ fontSize: '1.20em' }}>
        Para eso los componentes tiene estado interno. El mismo se manejo con la API de setState
      </p>
      <Code code={stateCode} />
      <Header as="h5" style={{ fontSize: '2em' }}>Ejemplo Básico</Header>
      <Code code={basicExample} />
      <Header as="h5" style={{ fontSize: '2em' }}>Ejemplo Side Effect</Header>
      <Code code={sideEffectExample} />
    </Segment>
  </Fragment>
);

export default Lifecycle;
