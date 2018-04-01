import React, { Fragment } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
  Divider,
} from 'semantic-ui-react';

import reactLogo from './react.png';
import diff from './diff.jpg';
import { Code } from '../components/CodeBlock';

const codeExample = `React.createElement(
  'div', 
  { className: 'div' },
  React.createElement(
    'p', 
    'Hello'
  )
);`;

const Intro = () => (
  <Fragment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h4" style={{ fontSize: '2em' }}>Qué es?</Header>
            <List bulleted>
              <List.Item>Libreria de UI, no Framework</List.Item>
              <List.Item>Declarativa</List.Item>
              <List.Item>Utiliza Virtual DOM</List.Item>
              <List.Item>Es puro JS sin templating</List.Item>
            </List>
            <Header as="h4" style={{ fontSize: '2em' }}>Virtual DOM</Header>
            <List bulleted>
              <List.Item>Representacíon en Memoria de una estructura DOM-like</List.Item>
              <List.Item>Modificarlo es barato y no ocupa mucho espacio</List.Item>
              <List.Item>Facilmente testeable</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src={reactLogo}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h4" style={{ fontSize: '2em' }}>Codigo</Header>
            <List bulleted>
              <List.Item>Funciones o clases con metodo "render"</List.Item>
              <List.Item>Devuelve lo que quiere que se vea en el browser</List.Item>
              <List.Item>Las clases pueden contener estado</List.Item>
              <List.Item>Las clases tiene un lifecycle con hooks</List.Item>
              <List.Item>Hay una forma mas linda de escribir (JSX)</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Code code={codeExample} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>React Renderes</Header>
        <List bulleted>
          <List.Item>React solo trabaja con vDOM</List.Item>
          <List.Item>Necesita alguien que haga el render real</List.Item>
          <List.Item>Hay muchos los mas conocidos: DOM y Native</List.Item>
          <List.Item>
            Otros:
            <List.List>
              <List.Item>consola: <a href="https://github.com/Yomguithereal/react-blessed">react-blessed</a></List.Item>
              <List.Item>windows: <a href="https://github.com/Microsoft/react-native-windows">react-native-windows (oficial)</a></List.Item>
              <List.Item>macOS: <a href="https://github.com/ptmt/react-native-macos">react-native-macos</a></List.Item>
              <List.Item>sonido: <a href="https://github.com/FormidableLabs/react-music">react-music</a></List.Item>
            </List.List>
          </List.Item>
        </List>
        <Button as="a" size="large" href="https://github.com/chentsulin/awesome-react-renderer">Más</Button>
      </Container>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>Como Funciona</Header>
        <List bulleted>
          <List.Item>Se llama a la funcion "render"</List.Item>
          <List.Item>Se compara el vDOM actual con el resultando</List.Item>
          <List.Item>Se marcan los nodos que se necesitan cambiar</List.Item>
          <List.Item>Se pasan los nodos marcados a quien hace el render real</List.Item>
        </List>
        <Image
          bordered
          rounded
          size="large"
          src={diff}
        />
        <Divider />
        <Button as="a" size="large" href="https://reactjs.org/docs/reconciliation.html">Más sobre reconcialition</Button>
      </Container>
    </Segment>
  </Fragment>
);

export default Intro;
