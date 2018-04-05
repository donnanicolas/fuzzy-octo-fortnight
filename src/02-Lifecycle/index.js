import React, { Fragment } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

import { InlineCode } from '../components/CodeBlock';

const Lifecycle = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Header as="h5" style={{ fontSize: '2em' }}>Lifecycle</Header>
      <p style={{ fontSize: '1.20em' }}>
        La clase <InlineCode>React.Component</InlineCode> tiene varios metodos que podemos
        "overridear".
      </p>
      <p style={{ fontSize: '1.20em' }}>
        Estos metodos son llamados en ciertos puntos de la vida de un componente. Cuando cambia
        el estado o las props.
      </p>
      <Header as="h5" style={{ fontSize: '2em' }}>Métodos</Header>
      <Header as="h6" style={{ fontSize: '1.8em' }}>constructor(props)</Header>
      <p style={{ fontSize: '1.20em' }}>
        Se llama al crear el componente. Se debe llamar a
        <InlineCode>super(props)</InlineCode> antes de cualquier otra cosa.
        Aqui se puede inicializar el estado o bindear metodos.
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>getDerivedStateFromProps(nextProps, prevState)</Header>
      <p style={{ fontSize: '1.20em' }}>
        Nueva API. Llamado cuando se inicializa el componente y cuando cambian las props.
        Debe devolver un objecto para actualizar el estado o null sino cambio.
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>[UNSAFE_]componentWillMount()</Header>
      <p style={{ fontSize: '1.20em' }}>
        Deprecado. Se llama despues del constructor y antes del primer render.
        Se puede llamar a <InlineCode>setState</InlineCode> sincronicamente. Se llama server side
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>componentDidMount</Header>
      <p style={{ fontSize: '1.20em' }}>
        Se llama despues del primer render. Util para obtener referencias al DOM y side effects.
        Todas las referencias generadas deben ser destruidas en
        <InlineCode>componentWillUnmount</InlineCode>
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>[UNSAFE_]componentWillReceiveProps(nextProps)</Header>
      <p style={{ fontSize: '1.20em' }}>
        Deprecado. Recomendado usar <InlineCode>getDerivedStateFromProps</InlineCode>
      </p>
      <p style={{ fontSize: '1.20em' }}>
        Llamado antes de que el componente reciba nuevas props. Util para cambiar el
        estado en respuesta a las <InlineCode>props</InlineCode>.
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>shouldComponentUpdate(nextProps, nextState)</Header>
      <p style={{ fontSize: '1.20em' }}>
        Se llama antes del render cuando ha cambiado el estado o las props. Si devuelve
        <InlineCode>true</InlineCode> se llama al render, de lo contrario no.
      </p>
      <p style={{ fontSize: '1.20em' }}>
        Precaución al utilizarlo por que evita que se llame al render!!
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>componentDidUpdate()</Header>
      <p style={{ fontSize: '1.20em' }}>
        Llamado luego de un update. Util para obtener nuevas referencias al DOM o side effects.
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>componentWillUnmount()</Header>
      <p style={{ fontSize: '1.20em' }}>
        Se llama antes de que el componente se desmonte. Utilizado para limpiar referencias y demas
      </p>
    </Segment>
  </Fragment>
);

export default Lifecycle;
