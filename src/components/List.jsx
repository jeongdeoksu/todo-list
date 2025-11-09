import './List.css';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getfiteredData = () => {
    if (search === '') {
      return todos;
    }

    return todos.filter((todo) => {
      return todo.content.toLowerCase().includes(search.toLowerCase());
    });
  };

  const fiteredTodos = getfiteredData();

  return (
    <div className="List">
      <h4>Todo List 🌿</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {fiteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />; // 스프레드 연산자
        })}
      </div>
    </div>
  );
};

export default List;
