import React, { Fragment } from 'react';
import {
  Grid,
  Header,
  Segment,
  List,
} from 'semantic-ui-react';
import { Code, InlineCode } from '../components/CodeBlock';

const componentCode = `const Cmp = (props) => {
  return (
    <div className="main">
      <p>
        Hello {props.name}
      </p>
    </div>
  );
}

ReactDOM.render(
  <Cmp name="Nicolas", 
  document.getElementById('root')
);
`;

const classComponentCode = `class ClassCmp extends React.Component {
  state = {loading: true};

  getDerivedStateFromProps(nextProps, nextState)

  componentWillMount() {}

  handleClick = () =>
    this.setState((state) => (
      {loading: !state.loading})
    );
  
  // More Lifecycle

  render () {
    const {name} = this.props;
    const {loading} = this.state;
    return (
      <div>
        {loading
          ? <p>Loading...</p>
          : <Cmp name={name} />
        }
        <button 
          onClick={this.handleClick}
        >
          ClickMe
        </button>
      </div>
    );
  }
}

ReactDOM.render(
  <ClassCmp name="Nicolas" />,
  document.getElementById('root')
);
`;

const Cmp = props => (
  <div className="main">
    <p>Hello {props.name}</p>
  </div>
);

class ClassCmp extends React.Component {
  state = { loading: true };
  handleClick = () => {
    this.setState(state => ({ loading: !state.loading }));
  }

  // More Lifecycle

  render() {
    const { name } = this.props;
    const { loading } = this.state;
    return (
      <div>
        {loading
          ? <p>Loading...</p>
          : <Cmp name={name} />
        }
        <button onClick={this.handleClick}>ClickMe</button>
      </div>
    );
  }
}

const Basic = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h4" style={{ fontSize: '2em' }}>Functional Component</Header>
            <List bulleted>
              <List.Item>Fomato básico de react</List.Item>
              <List.Item>Recibe parametros como attributes en un HTML tag</List.Item>
              <List.Item>
                Se llama cada vez que cambian las <InlineCode>props</InlineCode>
              </List.Item>
              <List.Item>Se pasan los nodos marcados a quien hace el render real</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={10} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Code code={componentCode} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row>
          <Grid.Column width={10} style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Code code={classComponentCode} />
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h4" style={{ fontSize: '2em' }}>Class Component</Header>
            <List bulleted>
              <List.Item>Formato class con mas funcionalidades</List.Item>
              <List.Item>
                Debe tener una funcion render equivalente a un functional component
              </List.Item>
              <List.Item>
                Tiene estado interno que se cambia via <InlineCode>setState</InlineCode>
              </List.Item>
              <List.Item>
                Tiene varios <InlineCode>hooks</InlineCode> cuando cambian las props o el estado.
                Actualmente esta cambiando la API
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment>
        <ClassCmp name="Nicolas" />
      </Segment>
    </Segment>
  </Fragment>
);

export default Basic;
