import { useState, useRef, useReducer } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Editor from './components/Editor.jsx';
import List from './components/List.jsx';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: '빨래하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: '노래 연습하기',
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const isRef = useRef(3);

  const onCreate = (content) => {
    // const newTodos = {
    //   id: isRef.current + 1,
    //   isDone: false,
    //   content: content,
    //   date: new Date().getTime(),
    // };
    // setTodos([...todos, newTodos]);
    dispatch({
      type: 'CREATE',
      data: {
        id: isRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
    // setTodos(
    //   // todos.map((todo) => {
    //   //   if (todo.id === targetId) {
    //   //     return { ...todo, isDone: !todo.isDone };
    //   //   }
    //   //   return todo;
    //   // }),
    //   todos.map((todo) =>
    //     todo.id === targetId //
    //       ? { ...todo, isDone: !todo.isDone } //
    //       : todo,
    //   ),
    // );
  };

  const onDeleate = (targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
    // setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDeleate} />
    </div>
  );
}

export default App;
