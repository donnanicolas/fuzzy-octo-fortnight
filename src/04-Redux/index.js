import React, { Fragment } from 'react';
import {
  Header,
  Segment,
  Image,
  List,
} from 'semantic-ui-react';

import fluxImg from './flux.png';

import { Code, InlineCode } from '../components/CodeBlock';

const action = `
// Action 
const addTodoAction = {
  type: ADD_TODO,
  text: 'asdf',
};

// Action Creator
const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text
  }
}

// Flux Standard action
const addTodo = (text) => ({
  type: ADD_TODO, // required string
  payload: { // required any, recommend object
    text
  },
  meta: {}, // optional data
  error: true // optional boolean
})`;

const reducer = `const initialState = {
  todos: [],
};

const todoApp = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state, todos: state.todos.concat([action.text])}
    default:
      return state
  }
}`;

const selectors = `const getTodos = (state) =>
  state.todos;

const getTodoById = (state, text) =>
  getTodos(state).find(t => text === t);
`;

const combineReducers = `
const reducer = combineReducers({
  todo: todoReducer,
  user: userReducer,
  app: appReducer,
  configuration: configurationReducer,
  tasks: tasksReducer,
  browser: browserReducer,
  session: sessionReducer,
});`;

const Lifecycle = () => (
  <Fragment>
    <Segment style={{ padding: '0em' }} vertical>
      <Header as="h5" style={{ fontSize: '2em' }}>Redux</Header>
      <p style={{ fontSize: '1.20em' }}>
        Para interacciones simples o para una app pequeña, el estado de react o simplemente
        un store sirve para manejar el estado de la aplicación
      </p>
      <p style={{ fontSize: '1.20em' }}>
        Pero en general, las applicaciones Web requieren un manejo mas complejo del estado.
        En react el standard es redux.
      </p>
      <Header as="h6" style={{ fontSize: '1.8em' }}>Flux</Header>
      <p style={{ fontSize: '1.20em' }}>
        Solo como antecedente, el formato original se llama <strong>Flux</strong>:
      </p>
      <Image src={fluxImg} />
      <Header as="h5" style={{ fontSize: '2em' }}>Por que Redux?</Header>
      <List bulleted>
        <List.Item>Es programacion funcional (o casi)</List.Item>
        <List.Item>Nos da una capa de abstraccion por sobre la modificacion del estado</List.Item>
        <List.Item>Se pasan los nodos marcados a quien hace el render real</List.Item>
        <List.Item>Como tiene transiciones entre estados, se lleva muy con React</List.Item>
        <List.Item>
          Como regla general sino estas seguro sino necesitas Redux, no lo necesitas
        </List.Item>
      </List>
      <Header as="h5" style={{ fontSize: '2em' }}>Muchas Partes</Header>
      <Header as="h6" style={{ fontSize: '1.8em' }}>Action</Header>
      <Code code={action} />
      <Header as="h6" style={{ fontSize: '1.8em' }}>Reducer</Header>
      <Code code={reducer} />
      <Header as="h6" style={{ fontSize: '1.8em' }}>Store</Header>
      <List bulleted>
        <List.Item>Contiene el estado</List.Item>
        <List.Item>En una app de react no lo van a ver mucho</List.Item>
        <List.Item>
          Metodos:
          <List>
            <List.Item><InlineCode>getState</InlineCode></List.Item>
            <List.Item><InlineCode>dispatch</InlineCode></List.Item>
            <List.Item><InlineCode>subscribe</InlineCode></List.Item>
            <List.Item><InlineCode>replaceReducer</InlineCode></List.Item>
          </List>
        </List.Item>
      </List>
      <Header as="h6" style={{ fontSize: '1.8em' }}>Selectors</Header>
      <Code code={selectors} />

      <Header as="h5" style={{ fontSize: '2em' }}>Redux (otra vez)</Header>
      <Code code={combineReducers} />
    </Segment>
  </Fragment>
);

export default Lifecycle;
