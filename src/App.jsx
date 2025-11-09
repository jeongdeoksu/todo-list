import { useState, useRef } from 'react';
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

function App() {
  const [todos, setTodos] = useState(mockData);
  const isRef = useRef(3);

  const onCreate = (content) => {
    const newTodos = {
      id: isRef.current + 1,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodos]);
  };

  const onUpdate = (targetId) => {
    setTodos(
      // todos.map((todo) => {
      //   if (todo.id === targetId) {
      //     return { ...todo, isDone: !todo.isDone };
      //   }
      //   return todo;
      // }),
      todos.map((todo) =>
        todo.id === targetId //
          ? { ...todo, isDone: !todo.isDone } //
          : todo,
      ),
    );
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
